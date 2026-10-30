import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY: TypedDocumentNode<
  FindArticleQuery,
  FindArticleQueryVariables
> = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => (
  <div className="cell-state">Beitrag wird geladen …</div>
)

export const Empty = () => (
  <div className="cell-state">Beitrag nicht gefunden.</div>
)

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div className="cell-state cell-error">Fehler: {error?.message}</div>
)

export const Success = ({
  article,
}: CellSuccessProps<FindArticleQuery, FindArticleQueryVariables>) => {
  return <Article article={article} />
}
