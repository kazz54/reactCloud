
import React from 'react';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';


const ArtistsList = (props) =>{
  return (
  <div className="box content">
    <h1>{props.title}</h1>
   <Markdown source={props.content} />
  </div>
)

     return (
    <div className="container">
	    
     <ReactMarkdown source={markdown} />
	    	   	    
    </div>
  )
                

                
            
       }
   

export default ArtistsList;




const Hero=() => {

  const data=(
  	<div className="hero">
  	<h1>Welcome To My Website</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?</p>
  	</div>
  )

  
}
