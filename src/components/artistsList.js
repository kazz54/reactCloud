
import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';


const ArtistsList = (props) =>{
  const markdown=(
  
   {props.title}
   {props.content}
  
)

     return (
    <div className="container">
	    
     <ReactMarkdown source={markdown} />
	    	   	    
    </div>
  )
                

                
            
       }
   

export default ArtistsList;


