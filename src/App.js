
import {useLyricFetch} from './hooks/useLyricFetch';

import Home from './components/Home';

import { DefaultStyle } from './DefaultStyle';

function App() {

  const {state} = useLyricFetch();
      
//  console.log(state)
  return (
    <>
    <DefaultStyle/>
    <Home/>
    </>
  );
}

export default App;
