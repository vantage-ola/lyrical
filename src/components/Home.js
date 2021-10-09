import { Footer } from "./Footer";

import { useLyricFetch } from "../hooks/useLyricFetch";
import LoadSpinner from "./LoadSpinner";
import Button from "./Button";
import Grid from "./Grid";
import SearchBar from "./SearchBar"
import Thumb from "./Thumb";

const Home = () => {

    const {state} = useLyricFetch();
    console.log(state)

    return (
        <>

        <SearchBar/>
        {state.song ? (
                    <Grid header='Popular Songs'>
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
        <Button text="Load More"/>
        <LoadSpinner/>
        <Footer/>
        </>
    )
}

export default Home;