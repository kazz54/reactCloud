
import React from 'react';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';


const ArtistsList = (props) =>{
  const markdown=(
  <div className="containerone">
   {props.title}
   
  <Markdown source={props.content} />
 </div>
)

     return (
    <div className="container">
	    
     {markdown}
	    	   	    
    </div>
  )
                

                
            
       }
   

export default ArtistsList;


