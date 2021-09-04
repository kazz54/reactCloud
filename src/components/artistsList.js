
import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';


const ArtistsList = (props) =>{
  const markdown=(
  <div className="box content">
   {props.title}
   {props.content}
  </div>
)

     return (
    <div className="container">
	    
     <ReactMarkdown source={markdown} />
	    	   	    
    </div>
  )
                

                
            
       }
   

export default ArtistsList;


