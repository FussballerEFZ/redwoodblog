import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

interface Props {
  id: number
}

const ArticlePage = ({ id }: Props) => {
  return (
    <>
      <Metadata title="Beitrag" description="Detailansicht eines Beitrags" />

      <Link to={routes.home()} className="back-link">
        ← Alle Beiträge
      </Link>
      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
