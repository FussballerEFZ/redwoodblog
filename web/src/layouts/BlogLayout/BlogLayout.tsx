import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="blog">
      <header className="blog-header">
        <div className="blog-header-inner">
          <h1 className="blog-logo">
            <Link to={routes.home()}>
              <span className="blog-logo-mark" aria-hidden="true">
                ▲
              </span>
              Redwood Blog
            </Link>
          </h1>
          <nav className="blog-nav">
            <ul>
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
              <li>
                <Link to={routes.newPost()} className="blog-nav-cta">
                  Neuer Beitrag
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="blog-main">{children}</main>
      <footer className="blog-footer">
        M245 · Framework-Vergleich · gebaut mit RedwoodJS
      </footer>
    </div>
  )
}

export default BlogLayout
