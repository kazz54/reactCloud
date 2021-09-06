import React from 'react';
//import { Link } from 'react-router-dom';
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown';
//import * as Markdown from 'react-markdown';


const ArtistsList=(props) => {

  const markdown=(
  	<div className="box content">
  	<h1>{props.title}</h1>
        <p>{props.content}</p>
  	</div>
  )
  ReactDom.render(
  <ReactMarkdown children={markdown} />,
  document.body
)
 
}

export default ArtistsList;


//const ArtistsList = (props) =>{

                
                
//            return (
//  <div className="box content">
//    <h1>{props.title}</h1>
//   <Markdown source={props.content} />
//  </div>
//)
                
            
//       }
   

//export default ArtistsList;


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


