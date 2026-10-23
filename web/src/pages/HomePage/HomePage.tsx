import { Metadata } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Alle Beiträge" />

      <ArticlesCell />
    </>
  )
}

export default HomePage
