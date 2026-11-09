import { weddings } from '../data/weddings'
import { SiteHeader, SiteFooter, WeddingImage } from './SiteLayout'

export function MarketingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <WeddingImage
            file="beach-wedding.png"
            alt="A bride in a white veil and groom in a black suit beneath a pink flower mandap with hanging lights, with a palace and sea behind them at sunset"
            hero
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1 id="hero-title">
              DESTINATION WEDDINGS
              <br />
              WHERE YOU DREAMED.
            </h1>
            <p>Your Dream Destination. Our Promise To Deliver.</p>
            <a className="button" href="/contact">
              Plan Your Dream Wedding
            </a>
          </div>
        </section>
        <section
          className="gallery-section"
          id="gallery"
          aria-labelledby="gallery-title"
        >
          <h2 id="gallery-title">GALLERY</h2>
          <div className="gallery-grid">
            {weddings.map((wedding) => (
              <a
                className="gallery-card"
                href={`/${wedding.slug}`}
                key={wedding.slug}
              >
                <div className="gallery-image">
                  <WeddingImage file={wedding.file} alt={wedding.alt} />
                </div>
                <h3>{wedding.title}</h3>
              </a>
            ))}
          </div>
          <p className="inspiration-note">
            Wedding inspiration, imagined for your celebration.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
