import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Opens the user's default email client with pre-filled fields.
    // Replace YOUR_EMAIL with the actual address.
    const to = 'YOUR_EMAIL@example.com'
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="contact-page page">
      <div className="contact-inner">
        <h1>Contact</h1>

        {sent ? (
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7 }}>
            Thanks — your email client should have opened. Talk soon.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit" className="btn">Send Message</button>
            </div>
          </form>
        )}

        <div className="contact-divider" />

        <a
          href="/portfolio.pdf"
          download
          className="contact-pdf"
        >
          Download Portfolio PDF
        </a>
      </div>
    </div>
  )
}
