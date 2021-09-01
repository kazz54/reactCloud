import React,{ Fragment, Component } from 'react';
import { createClient } from "contentful";
//import './content.scss';
//import HomeIterm from './homeIterm';
//import Banner from './Banner';
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
            <Fragment>
       <Hero />
       
      <section class="grid-1">
  <div class="item-1">1</div>
  <div class="item-2">2</div>
  <div class="item-3">3</div>
  <div class="item-4">4</div>
  <div class="item-5">5</div>
  <div class="item-6">6</div>
  <div class="item-7">7</div>
  <div class="item-8">8</div>
  <div class="item-9">9</div>
</section>
      <section className="grid-1">
      <div class="item-1">1</div>
      <div className="item-2">
      { this.state.posts.map(({fields}, i) =>
        <ArtistsList key={i} {...fields} />
      )}
     </div>
    </section>
    
    </Fragment>
        )
    }
}

export default Home;
