import React from 'react';
import heroImg from '../../../public/imgs/wis.png'
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="heroSection" className="hero">
      <div className="container">
        <div className="hero-content">
        <div className='hero-text'>
        <p className="section-title">Iam Wissam</p>
        <h1 className="hero-job-title"> 
          FRONTEND
          </h1>
          <button className="btn">Get In Touch</button>
        
        </div>
          <div className="hero-img">
          <Image src={heroImg} alt='hero img' height='390' width='300' objectFit='contain' />
          </div>
        </div>
        </div>
    </section>
  )
}

export default Hero
