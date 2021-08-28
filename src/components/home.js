
import React from 'react'
import useSticky from './useSticky.js'
import Welcome from './components/welcome'
import Navbar from './components/navbar'

function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Navbar sticky={isSticky} />
            <Welcome element={element} />
        </>
    )
}

export default App
