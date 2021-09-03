import React,{ Fragment, Component } from 'react';
import { createClient } from "contentful";
//import './content.scss';
//import HomeIterm from './homeIterm';
import Banner from './Banner';
//import Hero from './Hero';
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
       
      <div className="container">
     <Banner></Banner>
    

        <div className="main"><h2>A Demo Site showcasing CSS Grid</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque pariatur possimus alias quod ratione incidunt dicta assumenda repudiandae optio eveniet, quisquam fuga! Nam eaque fuga similique quia, esse non libero?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo libero doloremque, eum quis laudantium hic iste ab sed ipsum veniam, quam dolor rem cupiditate corrupti aliquam repudiandae officia soluta impedit!</p>
  </div>
  <div className="sidebar img"><h2>Find Me on Social Media</h2>
    <p><a href="https://twitter.com/charliecodes">Twitter</a></p>
    <p><a href="https://www.linkedin.com/in/charleseteure/">LinkedIn</a></p>
  </div>
  <div className="about"><h2>About </h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt voluptatem reprehenderit non. Magni sit alias quia, vel quidem autem quos optio quam at porro aliquid necessitatibus aut et eos nulla.</p>
  </div>
  <div className="contact"><h2>Contact</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consequuntur magnam ipsum, commodi quam, non dolorem numquam veritatis, qui nam voluptas asperiores neque magni. Placeat, natus reprehenderit. Fugit, voluptatum commodi.</p>
  </div>
  <div className="footer"><p>Built with by <a href="https://twitter.com/charliecodes">Charles Freeborn</a></p>
</div>
 </div>
    
    <div className="tr">
      { this.state.posts.map(({fields}, i) =>
        <ArtistsList key={i} {...fields} />
      )}
     </div>
    </Fragment>
        )
    }
}

export default Home;
