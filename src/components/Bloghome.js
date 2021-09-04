import { useState, useEffect } from "react";
import "./App.css";

const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`;

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/9heip63yijn8/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer [YOUR_ACCESS_TOKEN]",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.pageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo" />
        <p>{page.title}</p>
      </header>
    </div>
  );
}

export default App;
