export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="logo" href="/">X2 WEDDINGS AND EVENTS</a>
      <nav>
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/venues">Venues</a>
        <a href="/information">Information</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>X2 WEDDINGS AND EVENTS — Expert in Expressions</p>
      <p>© {new Date().getFullYear()} X2 Weddings and Events</p>
    </footer>
  )
}

export function WeddingImage({ file, alt, hero }: { file: string; alt: string; hero?: boolean }) {
  return (
    <img
      src={`/images/${file}`}
      alt={alt}
      className={hero ? "wedding-image hero" : "wedding-image"}
      loading={hero ? "eager" : "lazy"}
    />
  )
}
