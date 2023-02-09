// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './phone.css';
 import Home from './Home';
import About from './About';
import Counterup from './Counterup';
import Slider from './Components/Slider';
import Footer from './Footer';
const App = () => {
  return (
    <>
    <Home/>
    <Counterup/>
    <About/>
    <Slider/>
    <Footer/>
    </>
  );
};

export default App;
