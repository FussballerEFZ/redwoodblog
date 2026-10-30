import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

const SUMMARY_LENGTH = 200

interface Props {
  article: Pick<Post, 'id' | 'title' | 'body' | 'createdAt'>
  summary?: boolean
}

const truncate = (text: string, length: number) =>
  text.length > length ? text.substring(0, length).trimEnd() + '…' : text

const Article = ({ article, summary = false }: Props) => {
  return (
    <article className={summary ? 'article' : 'article article-full'}>
      <header>
        <h2 className="article-title">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
        <time className="article-date" dateTime={article.createdAt}>
          {new Date(article.createdAt).toLocaleDateString('de-CH', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </header>
      <div className="article-body">
        {summary ? truncate(article.body, SUMMARY_LENGTH) : article.body}
      </div>
      {summary && (
        <Link to={routes.article({ id: article.id })} className="article-more">
          Weiterlesen →
        </Link>
      )}
    </article>
  )
}

export default Article
