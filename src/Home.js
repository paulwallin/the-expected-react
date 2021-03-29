import React from 'react'
import NewsCallout from './components/Callouts/NewsCallout'
import GigsCallout from './components/Callouts/GigsCallout'
import YouTube from 'react-youtube'

const Home = (props) => {
  return (
    <>
      <section id="home">
        <aside>
          <NewsCallout />
          <GigsCallout />
        </aside>
        <main>
          <YouTube videoId={'ehcGy-ltqFU'} />
        </main>
        <aside>
          <NewsCallout />
          <GigsCallout />
        </aside>
      </section>
    </>
  )
}

export default Home
