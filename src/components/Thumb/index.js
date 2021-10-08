import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, songId, clickable, title }) => (
  <div>
    {clickable ? (
  //    <Link to={`/${songId}`}>
        <Image src={image} alt='song-thumb' />
//      </Link>
    ) : (
      <Image src={image} alt='song-thumb' />
    )}
    <h4>{title}</h4>
  </div>
);

export default Thumb;
