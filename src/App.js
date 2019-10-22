import React from 'react';
import NavBar from './Components/NavBar/Navbar.js'
import {HashRouter, Route} from 'react-router-dom'
import Home from "./Components/Home/Home.js"
import Photos from "./Components/Photos/Photos.js"
import ContactUs from "./Components/ContactUs/ContactUs.js"
import GetQuote from "./Components/GetQuote/GetQuoteWarning.js"

function App() {
  return (
    <HashRouter>
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/contactus" component={ContactUs}/>
      <Route path="/photos" component={Photos}/>
      <Route path="/getquote" component={GetQuote}></Route>
    </div>
    </HashRouter>
  );
}

export default App;

