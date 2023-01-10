import React from 'react'
import dwsim from './images/dwsim.png'
import logo2 from './images/logo2.png'


const Slider = () => {
  return (
    <div className='banner'>
        <div className='slider'>
            <img src={dwsim} alt="" id='slideImg' />
            <img src={logo2} alt="" id='slideImg' />
        </div>
        <div className='overlay'>
        
        </div>
    </div>
  )
}


export default Slider
