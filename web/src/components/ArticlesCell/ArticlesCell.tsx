import type { ArticlesQuery, ArticlesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY: TypedDocumentNode<ArticlesQuery, ArticlesQueryVariables> =
  gql`
    query ArticlesQuery {
      articles: posts {
        id
        title
        body
        createdAt
      }
    }
  `

export const Loading = () => (
  <div className="cell-state">Beiträge werden geladen …</div>
)

export const Empty = () => (
  <div className="cell-state">Noch keine Beiträge.</div>
)

export const Failure = ({
  error,
}: CellFailureProps<ArticlesQueryVariables>) => (
  <div className="cell-state cell-error">Fehler: {error?.message}</div>
)

export const Success = ({
  articles,
}: CellSuccessProps<ArticlesQuery, ArticlesQueryVariables>) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article key={article.id} article={article} summary />
      ))}
    </div>
  )
}
