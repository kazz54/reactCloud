
import React,{ Component } from 'react';

//import Banner from './banner'
//import ArtistsList from './artistsList';

// REQUESTS URL
const URL_ARTIST = 'https://graphql.contentful.com/content/v1/spaces/9heip63yijn8/'

class Posthome extends Component {
    constructor(props){
        super(props)

        this.state = {
            artists:''
        }
    }

    componentDidMount() {
        fetch(URL_ARTIST, {
            method: 'Post',
            headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek",
        },
        })
//        .then(response => response.json())
//        .then(({ data, errors }) => {
//        if (errors) {
//         console.error(errors);
 //       }
   //     .then(json => {
  //          this.setState({artists:json})
        
   //     })
       
//   }


    .then(response => response.json())
    console.log()
        .then(json => {
  //          this.setState({artists:json})
   //     })
    }


    render(){
        return(
            <div>
                
                
            </div>
        )
    }
}
        

            
        
    


export default Posthome;
