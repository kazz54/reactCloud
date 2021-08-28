import React,{ Component } from 'react';
import { createClient } from "contentful";
//import HomeIterm from './homeIterm';
import Banner from './Banner';
import Hero from './Hero';
//import Banner from './banner'
import ArtistsList from './artistsList';

// REQUESTS URL
//const client = contentful.createClient({
//  space: "9heip63yijn8",
//  accessToken: "CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek" })

//const URL_ARTIST = 'http://192.168.0.250:7000/artists'

class Home extends Component {
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
            <div>
      <Banner></Banner>
      <Hero></Hero>
      { this.state.posts.map(({fields}, i) =>
        <ArtistsList key={i} {...fields} />
      )}
    </div>
        )
    }
}

export default Home;
