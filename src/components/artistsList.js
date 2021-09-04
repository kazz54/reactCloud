
import React from 'react';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';


const ArtistsList = (props) =>{
  
  <div className="containerone">
   {props.title}
   
  <Markdown source={props.content} />
 </div>
       

                
            
       }
   

export default ArtistsList;


