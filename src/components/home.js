
import React from 'react';
import useSticky from './useSticky.js';
import Banner from './Banner';
import Hero from './Hero';

function Home() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Navbar sticky={isSticky} />
            <Welcome element={element} />
        </>
    )
}

export default Home
