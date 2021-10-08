import { Footer } from "./Footer";
import Header from "./Header";

import { useLyricFetch } from "../hooks/useLyricFetch";
import { LoadSpinner } from "./LoadSpinner/LoadSpinner.styles";
import Button from "./Button";
import Grid from "./Grid";
import SearchBar from "./SearchBar"
import Thumb from "./Thumb";

const Home = () => {

    const {state} = useLyricFetch();
    console.log(state)

    return (
        <>

        <Header/>
        <SearchBar/>
        {state.song ? (
                    <Grid header='Songs'>
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