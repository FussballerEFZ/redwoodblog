import { render } from '@redwoodjs/testing/web'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article article={{ id: 1, title: 'Titel', body: 'Text', createdAt: '2026-10-23T08:00:00Z' }} />)
    }).not.toThrow()
  })
})
