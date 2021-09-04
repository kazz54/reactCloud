
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

function Bloghome() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/9heip63yijn8/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        .then(json => {
            this.setState({data:json})




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
