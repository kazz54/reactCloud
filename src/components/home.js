
import React from 'react'
import useSticky from './useSticky.js'
import Welcome from './welcome'
import Navbar from './navbar'

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
