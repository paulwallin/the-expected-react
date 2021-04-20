import React from 'react'
import NewsCallout from './components/Callouts/NewsCallout'
import GigsCallout from './components/Callouts/GigsCallout'
import Callout from './components/Callouts/Callout'
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
          <Callout calloutSlug="find-our-music-on" />
          <Callout calloutSlug="follow-us" />
        </aside>
      </section>
    </>
  )
}

export default Home
