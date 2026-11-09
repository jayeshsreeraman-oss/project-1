import { weddings } from '../data/weddings'
import { SiteHeader, SiteFooter, WeddingImage } from './SiteLayout'
export function WeddingPage({ index }: { index: number }) {
  const wedding = weddings[index]
  return (
    <>
      <SiteHeader />
      <main id="main" className="detail-page">
        <a className="back-link" href="/#gallery">
          ← BACK TO GALLERY
        </a>
        <div className="detail-grid">
          <div className="detail-image">
            <WeddingImage file={wedding.file} alt={wedding.alt} hero />
          </div>
          <section className="detail-copy">
            <p className="eyebrow">X2 WEDDINGS AND EVENTS</p>
            <h1>{wedding.title}</h1>
            <p>{wedding.description}</p>
            <ul>
              {wedding.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <a className="button" href="/contact">
              Plan Your Dream Wedding
            </a>
            <p className="inspiration-note">
              Wedding inspiration, imagined for your celebration.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
