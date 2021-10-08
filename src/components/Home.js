import { Footer } from "./Footer";
import Header from "./Header";

import { useLyricFetch } from "../hooks/useLyricFetch";
import { LoadSpinner } from "./LoadSpinner/LoadSpinner.styles";
import Grid from "./Grid";

const Home = () => {

    const {state} = useLyricFetch();
    console.log(state)

    return (
        <>

        <Header/>
        {state.song ? (
                    <Grid header='Songs'>
                    {state.song.map(songs => (
                        <div key={songs.id}>{songs.title}</div>
                    ))}
                </Grid>
        ): null}
        <LoadSpinner/>
        <Footer/>
        </>
    )
}

export default Home;