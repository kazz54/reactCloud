
import React from 'react';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';


const ArtistsList = (props) =>{
    return (
  <div className="containerone">
   {props.title}
   <Markdown>{props.content}</Markdown>
  
 </div>
       

   )             
            
       }
   

export default ArtistsList;


