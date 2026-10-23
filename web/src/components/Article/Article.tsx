import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Pick<Post, 'id' | 'title' | 'body' | 'createdAt'>
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
        <time dateTime={article.createdAt}>
          {new Date(article.createdAt).toLocaleDateString('de-CH')}
        </time>
      </header>
      <div>{article.body}</div>
    </article>
  )
}

export default Article
