import React,{useEffect} from 'react';
//import './navbar.scss';
//import Logo from './../img/logo.svg';

const Banner=() => {
  const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo"><a href="/index.html">My Website</a></h1>
        <ul>
          <li><a href="#" class="current">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav> 
  )
};

export default Banner;
