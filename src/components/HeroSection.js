import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/handDemo.png' alt='Hand with App' />
      <h1> 
        The Verkehrshaus 
      </h1>
      <h2>3D-MAP</h2>
      <p> Ready to start exploring?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('start Unity')}
        >
          GET STARTED<i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

