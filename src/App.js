import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/services' exact component= {Services} />
        <Route path='/products' exact component= {Products} />
        <Route path='/sign-up' exact component= {SignUp} />
        <Route path='/file-share' component={() => { 
           window.location.href = 'https://send.creativeshi.com/'; 
           return null;}}           
         />
        <Route path='/video-confr' component={() => { 
           window.location.href = 'https://zoom.us/'; 
           return null;}}           
         />
        <Route path='/video-stream' component={() => { 
           window.location.href = 'https://www.twitch.tv/'; 
           return null;}}           
         /> 
          
      </Switch>
    </Router>
      
    </>
  );
}

export default App;


/*
<Route path='/privacy-policy' component={() => { 
     window.location.href = 'https://example.com/1234'; 
     return null;
}}/>
*/


/*
There is no need to use <Link /> component from react-router.
If you want to go to external link use an anchor tag.
<a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Policies</a>
*/

