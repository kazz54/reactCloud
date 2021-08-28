import React,{ Fragment, Component } from 'react';
//import React from 'react';
//import useSticky from './useSticky.js';
import Banner from './Banner';
import Hero from './Hero';
//import About from './About';
//function Home() {
//    const { isSticky, element } = useSticky()
 
  class Home extends Component {
    render(){
    return (
             <Fragment>
             <Banner />
             <Hero />
           
        </Fragment>
    )
}
}
export default Home
