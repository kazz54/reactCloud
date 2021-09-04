
// REQUESTS URL
const URL_ARTIST = 'https://graphql.contentful.com/content/v1/spaces/9heip63yijn8/'


const query = `
{
   blogCollection{
    items {
      titile
    }
  }
}
`;
class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            artists:''
        }
    }

    componentDidMount() {
        fetch(URL_ARTIST, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({artists:json})
        })
    }


    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistsList allArtists={this.state.artists}></ArtistsList>
            </div>
        )
    }
}

export default Home;
