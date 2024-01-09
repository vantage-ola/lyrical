import { Footer } from "./Footer";

import { useLyricFetch } from "../hooks/useLyricFetch";
import LoadSpinner from "./LoadSpinner";
import Grid from "./Grid";
import SearchBar from "./SearchBar"
import Thumb from "./Thumb";
import Error from "./Error";
const Home = () => {

    const {state, loading, searchTerm, setSearchTerm, error} = useLyricFetch();
    
    if (error) return <Error/>
    return (
        <>

        <SearchBar setSearchTerm={setSearchTerm}/>
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
        {state.search ? (
                    <Grid header={ searchTerm }>

                    {state.search.map(result => (
                        <Thumb
                        key={result.result.id}
                        clickable
                        image ={
                            result.result.header_image_url
                        }
                        title ={result.result.title}
                        songId={result.result.id}
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