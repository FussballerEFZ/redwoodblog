import { Metadata } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Alle Beiträge" />

      <section className="blog-intro">
        <h2>Alle Beiträge</h2>
        <p>
          Ein minimaler Blog, gebaut mit dem offiziellen RedwoodJS-Tutorial.
        </p>
      </section>

      <ArticlesCell />
    </>
  )
}

export default HomePage
