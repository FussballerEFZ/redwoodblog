import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="Über diesen Blog" />

      <section className="blog-page">
        <h2>Über diesen Blog</h2>
        <p>
          Dieser Blog wurde mit dem offiziellen RedwoodJS-Tutorial für das Modul
          M245 (Framework-Vergleich) gebaut.
        </p>
      </section>
    </>
  )
}

export default AboutPage
