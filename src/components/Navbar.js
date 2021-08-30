import React,{useEffect} from 'react';
import './navbar.scss';
import Logo from './logo.svg';

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")}>
        

        <nav className="navigation">
            <div className="container">
        <h1 className="logo"><a href="/index.html">My Website</a></h1>
        <ul>
          <li><a href="#" className="current">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
        </nav>
     
    </header>
  )
};

export default Navbar;
