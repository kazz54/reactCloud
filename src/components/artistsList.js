
import React from 'react';
import { Link } from 'react-router-dom';
//import * as Markdown from 'react-markdown';


const ArtistsList = (props) =>{

                
                
            return (
  <div className="box content">
    <h1>{props.title}</h1>
   <p>{props.content}</p>
  </div>
)
                
            
       }
   

export default ArtistsList;
