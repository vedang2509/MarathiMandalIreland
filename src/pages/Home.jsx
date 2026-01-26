export default function Home() {
  return (
    <section className="home-page">
      <div className="hero-section">
        <h1>Marathi Mandal Ireland</h1>
        <p>A non-profit organisation of people of Marathi/Maharashtra background residing in Ireland, united in community, culture, and celebration.</p>
      </div>

      <div className="about-summary">
        <h2>About Us</h2>
        <p>
          Marathi Mandal Ireland is a community initiative that brings together Maharashtrians living
          in Ireland to celebrate culture, festivals, creativity, and heritage. We provide a space
          for cultural exchange and shared experiences across generations.
        </p>
      </div>

      <div className="highlight-events">
        <h2>Upcoming Highlight</h2>
        <div className="event-card">
          <h3>Jallosh 2025</h3>
          <p>A Celebration of Marathi Cinema and Theatre in Dublin.</p>
          <p><strong>Date:</strong> 30th August 2025</p>
          <p><strong>Venue:</strong> Church of Scientology & Community Centre, Firhouse Road, Dublin, D24</p>
          {/* Optional: Add a register button later */}
        </div>
      </div>

      <div className="community-invite">
        <h2>Join the Community</h2>
        <p>
          Whether you’re new to Ireland or have been here for years, Marathi Mandal Ireland welcomes
          everyone interested in celebrating Marathi language and culture. Find events, blogs, and
          more on this site — and get in touch if you’d like to contribute.
        </p>
      </div>
    </section>
  );
}
