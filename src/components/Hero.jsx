import React from 'react';
import About from './About';

const Hero = ({element}) => {
    return(
        <div className="hero">
        <div ref={element}>
      <div className="container">
        
        <About />
      </div>
    </div>
    </div>
    )
}

export default Hero;
