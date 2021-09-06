//import Head from 'next/head'

import { fetchEntries } from '../utils/contentfulPosts'

import Header from './Header'
import Footer from './Footer'
import Post from './Post'

export default function HomePost({ posts }) {
  return (
    <div className="container">
      
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      

      <main>
        <Header />
        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.date} date={p.date} content={p.content} title={p.title} path={p.path} />
          })}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}
