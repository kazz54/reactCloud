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
      <section className="grid-1">
        <div className="item-2">
<p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
m</p>
</div>
      
    <div className="item-2">
<p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
m</p>
</div>
    </section>
    <div className="item-5">
      { this.state.posts.map(({fields}, i) =>
        <ArtistsList key={i} {...fields} />
      )}
     </div>
    </Fragment>
        )
    }
}

export default Home;
