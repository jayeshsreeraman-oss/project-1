import { useState, type FormEvent } from 'react'
import { SiteHeader, SiteFooter } from './SiteLayout'
function Arrow() {
  return <span aria-hidden="true">↗</span>
}
export function ContactPage() {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'pending') return
    const data = new FormData(event.currentTarget)
    setStatus('pending')
    try {
      const body = new URLSearchParams()
      data.forEach((value, key) => body.append(key, String(value)))
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }
  return (
    <>
      <SiteHeader />
      <main id="main">
        {' '}
        <section id="contact" className="contact section-wrap">
          <div className="contact-intro">
            <p className="eyebrow rust">
              EVERY GREAT CELEBRATION STARTS WITH A HELLO
            </p>
            <h2>
              Got a reason
              <br />
              to <em>celebrate?</em>
            </h2>
            <p>
              We’d love to hear your story.
              <br />
              Tell us a little about what you’re dreaming of,
              <br />
              and let’s make something wonderful together.
            </p>
            <a
              className="text-link contact-email"
              href="mailto:book@x2events.com"
            >
              book@x2events.com <Arrow />
            </a>
          </div>
          <div className="form-container">
            {status === 'success' ? (
              <div className="success" role="status">
                <span aria-hidden="true">✳</span>
                <h3>Here’s to your next chapter.</h3>
                <p>
                  Thank you for sharing your plans. Your enquiry has been
                  received, and the X2 team can follow up using your email.
                </p>
                <button className="text-link" onClick={() => setStatus('idle')}>
                  Send another enquiry <Arrow />
                </button>
              </div>
            ) : (
              <form
                name="event-enquiry"
                method="POST"
                action="/__forms.html"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={submit}
                aria-busy={status === 'pending'}
              >
                <input type="hidden" name="form-name" value="event-enquiry" />
                <p hidden>
                  <label>
                    Leave empty
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <fieldset disabled={status === 'pending'}>
                  <legend className="sr-only">
                    Tell us about your celebration
                  </legend>
                  <div className="form-row">
                    <label>
                      Your name
                      <input
                        name="name"
                        placeholder="The name behind the celebration"
                        autoComplete="name"
                        required
                        maxLength={100}
                      />
                    </label>
                    <label>
                      Email address
                      <input
                        type="email"
                        name="email"
                        placeholder="Where we can reach you"
                        autoComplete="email"
                        required
                        maxLength={254}
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      What are we celebrating?
                      <select name="event-type" required defaultValue="">
                        <option value="" disabled>
                          Select your occasion
                        </option>
                        <option>Wedding</option>
                        <option>Social celebration</option>
                        <option>Corporate event</option>
                        <option>Something else</option>
                      </select>
                    </label>
                    <label>
                      Event date (if you know it)
                      <input type="date" name="event-date" />
                    </label>
                  </div>
                  <label>
                    Tell us a little about your plans
                    <textarea
                      name="message"
                      rows={3}
                      required
                      minLength={10}
                      maxLength={3000}
                      placeholder="The details, the traditions, the feeling you imagine…"
                    />
                  </label>
                  <button className="button button-rust" type="submit">
                    {status === 'pending'
                      ? 'Sending your story…'
                      : 'Let’s make it memorable'}{' '}
                    <Arrow />
                  </button>
                  <p className="privacy-note">
                    Your details are used only to respond to your event enquiry.
                  </p>
                </fieldset>
                {status === 'error' && (
                  <p className="error" role="alert">
                    Your enquiry couldn’t be confirmed. Your details are still
                    here — please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
