
import React from 'react';
import useSticky from './useSticky.js';
import Banner from './Banner';
import Hero from './Hero';
import About from './About';
function Home() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Banner sticky={isSticky} />
            <Hero element={element} />
            <About/>
        </>
    )
}

export default Home
