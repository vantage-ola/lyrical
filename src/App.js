import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultStyle } from './DefaultStyle';
import Home from './components/Home';
import Song from './components/Song';
import Header from './components/Header';
import NotFound from './components/NotFound';
import About from './components/About';

function App() {

  return (
    <Router>
        <Header/>
			<Routes>
				<Route path='/' element ={<Home/>}/>
				<Route path='/song/:songId' element={<Song/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/*' element={<NotFound/>}/>
			</Routes>
      	<DefaultStyle/>
    </Router>
  );
}

export default App;
