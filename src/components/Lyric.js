import React, { useState, useEffect } from "react";
import axios from 'axios';
import cheerio from 'cheerio-without-node-native';

const Lyric = ({ link }) => {
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        
      try {
        const proxyUrl = 'https://corsproxy.io/?'; // proxy url
        const response = await axios.get(`${proxyUrl}${link}`);
        const data = response.data;

        // Use cheerio for parsing in the browser
        const $ = cheerio.load(data);
        let lyricsContent = $('div[class="lyrics"]').text().trim();

        if (!lyricsContent) {
          // If the main lyrics class is not found, try alternative parsing
          lyricsContent = '';

          $('div[class^="Lyrics__Container"]').each((i, elem) => {
            if ($(elem).text().length !== 0) {
              let snippet = $(elem)
                .html()
                .replace(/<br>/g, '\n')
                .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
              lyricsContent += $('<textarea/>').html(snippet).text().trim() + '\n\n';
            }
          });
        }

        setLyrics(lyricsContent);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [link]);
  return (
    <div>
    {loading && <p style={{ fontStyle: 'italic', color: 'gray' }}>Loading...</p>}
    {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    {lyrics ? (
      lyrics.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))
    ) : (
      !loading && !error && <p>No lyrics found</p>
    )}
  </div>
);
};

export default Lyric;
