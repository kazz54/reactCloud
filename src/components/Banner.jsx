import React,{useEffect} from 'react';
//import './navbar.css';
//import Logo from './../img/logo.svg';

const Banner = ({ sticky }) => { 

  return (
    <navbar className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="container">
        <h1 className="logo"><a href="/index.html">My Website</a></h1>
        <ul>
          <li><a href="#" className="current">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </navbar> 
  )
};

export default Banner;
