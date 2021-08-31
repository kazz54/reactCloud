import React,{ Fragment, Component } from 'react';
import { createClient } from "contentful";
//import HomeIterm from './homeIterm';
//import Banner from './Banner';
//import Hero from './Hero';
//import Banner from './banner'
import ArtistsList from './artistsList';

// REQUESTS URL
//const client = contentful.createClient({
//  space: "9heip63yijn8",
//  accessToken: "CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek" })

//const URL_ARTIST = 'http://192.168.0.250:7000/artists'

class Landing extends Component {
//    constructor(props){
//        super(props)

//        this.state = {
//            artists:''
//        }
//   }
constructor() {
    super();
    this.state = { posts: [] };
    this.client = createClient({
      accessToken:
        "CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek",
      space: "9heip63yijn8"
    });
}
  

componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
fetchPosts = () => this.client.getEntries()

setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

    render(){
        return(
            <Fragment>
      <div className="container">
     
      
    <div className main>
     <h2>A Demo Site showcasing CSS Grid</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque pariatur possimus alias quod ratione incidunt dicta assumenda repudiandae optio eveniet, quisquam fuga! Nam eaque fuga similique quia, esse non libero?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo libero doloremque, eum quis laudantium hic iste ab sed ipsum veniam, quam dolor rem cupiditate corrupti aliquam repudiandae officia soluta impedit!</p>
  </div>
      
      <section class="container content">
      { this.state.posts.map(({fields}, i) =>
        <ArtistsList key={i} {...fields} />
      )}
    </section>
   </div>
    </Fragment>
        )
    }
}

export default Landing;
