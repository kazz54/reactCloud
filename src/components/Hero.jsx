import React from 'react';
import About from './About';

const Hero = ({element}) => {
    return(
        <div className="hero">
        <div ref={element}>
      <div className="container">
        <h1>Welcome To My Website</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
      </div>
     </div>
      <section class="container content">
        <About />
      </section>
    </div>
    
    )
}

export default Hero;
