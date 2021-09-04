
import React from 'react';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';


const ArtistsList = (props) =>{

const data=(
  	<div className="containerone">
   {props.title}
   {props.content}
  
 </div>
  )

  return (
    <main className="container">
	    
	    {data}
	    
	    
	    
	    
	    
	   
	    
    </main>
  )
}
    
  
       

  
   

export default ArtistsList;


