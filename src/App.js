import './App.css';

import {useLyricFetch} from './hooks/useLyricFetch';

function App() {

  const {state} = useLyricFetch();
      
  console.log(state)
  return (
    <div>

    </div>
  );
}

export default App;
