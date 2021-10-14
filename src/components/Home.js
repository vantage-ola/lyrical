import { Footer } from "./Footer";

import { useLyricFetch } from "../hooks/useLyricFetch";
import LoadSpinner from "./LoadSpinner";
import Button from "./Button";
import Grid from "./Grid";
import SearchBar from "./SearchBar"
import Thumb from "./Thumb";

const Home = () => {

    const {state, loading, error} = useLyricFetch();
    console.log(state)
    
    if (error) return <div>Something went wrong...</div>

    return (
        <>

        <SearchBar/>
        {state.song ? (
                    <Grid header='Featured Songs'>
                    {state.song.map(songs => (
                        <Thumb
                        key={songs.id}
                        clickable
                        image ={
                            songs.header_image_url
                        }
                        title ={songs.title}
                        songId={songs.id}
                        /> 
                    ))}
                </Grid>
        ): null}        
        {loading && <LoadSpinner/>}
        <Footer/>
        </>
    )
}

export default Home;