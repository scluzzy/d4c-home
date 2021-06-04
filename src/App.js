import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Working from './components/pages/Working';
import ServiceTerms from './components/pages/ServiceTerms';
import OurStory from './components/pages/OurStory';
import OurTeam from './components/pages/OurTeam';
import SupportUs from './components/pages/SupportUs';

/* In the app function we see the use of router component 
from react-router-dom which is a tool that helps in routing 
to inbuilt paths like the home page, services, and other modules */

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/services' exact component= {Services} />
        <Route path='/products' exact component= {Products} />
        <Route path='/sign-up' exact component= {SignUp} />
        <Route path='/about' exact component= {About} />
        <Route path='/contact-us' exact component= {ContactUs} />        
        <Route path='/working' exact component= {Working} />        
        <Route path='/service-terms' exact component= {ServiceTerms} />
        <Route path='/our-story' exact component= {OurStory} />
        <Route path='/our-team' exact component= {OurTeam} />
        <Route path='/our-story' exact component= {OurStory} />
        <Route path='/support-us' exact component= {SupportUs} />

        <Route path='/documentation'  component={() => { 
           window.location.href = 'https://github.com/scluzzy/d4c-home/blob/master/Project_Documentation.pdf'; 
           return null;}}
         />
        <Route path='/file-share' component={() => { 
           window.location.href = 'https://logu-fosablanca.github.io/Sharelux-g33/'; 
           return null;}}           
         />
        <Route path='/video-confr' component={() => { 
           window.location.href = 'https://joyn-g33.herokuapp.com/'; 
           return null;}}           
         />
        <Route path='/video-stream' component={() => { 
           window.location.href = '/'; 
           return null;}}           
         /> 

          
      </Switch>
    </Router>
      
    </>
  );
}

export default App;


/* For using external link as path in react-router:-
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