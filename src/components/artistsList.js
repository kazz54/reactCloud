import React from 'react';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';


const ArtistsList = (props) =>{

                
                
            return (
  <div className="box content">
    <h1>{props.title}</h1>
   <Markdown>{props.content}</Markdown>
  </div>
)
                
            
       }
   

export default ArtistsList;


//import React from 'react';
//import { Link } from 'react-router-dom';
//import * as Markdown from 'react-markdown';


//const MyList = (props) =>{

//const data=(
//  	<div className="containerone">
//   {props.title}
//   {props.content}
  
// </div>
//  )	    
    
//}
//export default ArtistsList;


