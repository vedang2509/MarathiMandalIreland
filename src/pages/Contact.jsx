export default function Contact() {
  return (
    <section className="contact-page">
      <h1>Contact Us</h1>

      <p className="contact-intro">
        We would love to hear from you. Whether you have a question about events,
        want to contribute to our activities, or simply want to connect with the
        Marathi community in Ireland, feel free to reach out.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Email</h3>
          <p>
            <a href="mailto:info@irishmarathi.com">
              info@irishmarathi.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h3>Community</h3>
          <p>
            Marathi Mandal Ireland is a volunteer-driven organisation.
            We welcome participation from community members across Ireland.
          </p>
        </div>

        <div className="contact-card">
          <h3>Contributions</h3>
          <p>
            Interested in contributing articles, poems, artwork, or volunteering
            for events? Please get in touch with us via email.
          </p>
        </div>
      </div>

      <div className="contact-note">
        <p>
          Follow our updates and announcements through community channels and
          event communications. We look forward to connecting with you.
        </p>
      </div>
    </section>
  );
}
