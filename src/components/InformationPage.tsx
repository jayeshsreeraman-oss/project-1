import { SiteHeader, SiteFooter, WeddingImage } from './SiteLayout'
export function InformationPage({ venues = false }: { venues?: boolean }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="information-page">
        <p className="eyebrow">X2 WEDDINGS AND EVENTS</p>
        <h1>
          {venues ? 'A setting for your story.' : 'EXPERT IN EXPRESSIONS'}
        </h1>
        <p className="intro">
          {venues
            ? 'From an intimate garden to a grand palace or a sunset by the sea, your wedding begins with a setting that feels like you.'
            : 'Over ten years of experience. A thoughtful eye for detail. A heartfelt approach to your wedding.'}
        </p>
        <div className="information-grid">
          <WeddingImage
            file={venues ? 'beach-wedding.png' : 'christian-wedding.png'}
            alt={
              venues
                ? 'Sunset wedding setting with a floral mandap beside the sea'
                : 'A couple beneath a white floral wedding arch'
            }
            hero
          />
          <div>
            <h2>
              {venues
                ? 'Thoughtfully chosen. Beautifully styled.'
                : 'Your traditions. Your vision. Our care.'}
            </h2>
            <p>
              {venues
                ? 'We help you explore venue styles, consider guest arrangements, and coordinate the details that bring your celebration together. Tell us what you imagine, and we can discuss the right setting for your plans.'
                : 'At X2 Weddings and Events, we bring your ideas to life with considered planning, floral design, and ceremony coordination. Every celebration starts with listening to what matters to you.'}
            </p>
            <a className="button" href="/contact">
              Plan Your Dream Wedding
            </a>
            <p className="inspiration-note">Images are wedding inspiration.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
