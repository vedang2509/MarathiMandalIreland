import CountdownTimer from "../components/CountdownTimer";

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
    <span className="badge">Limited Slots</span>

    <h3>🏸 Badminton Tournament 2026</h3>

    <p>
      <strong>Marathi Mandal Ireland</strong> presents the <strong>5th Edition</strong> of our
      annual Badminton Tournament. Whether you’re a pro or just love the game,
      this is your chance to shine!
    </p>

    <p><strong>📅 Date:</strong> 15th March 2026</p>
    <p><strong>⏰ Time:</strong> 9:00 AM onwards</p>
    <p><strong>📍 Venue:</strong> Baldoyle Badminton Centre, D13 E8Y2</p>

    <h4>⏱️ Tournament starts in:</h4>
    <CountdownTimer targetDate="2026-03-15T09:00:00" />

    <h4>Highlights</h4>
    <ul>
      <li>16 teams per category</li>
      <li>Men’s Doubles (Advanced & Intermediate), Mixed Doubles</li>
      <li>Quarter-finals added – 50% teams qualify</li>
      <li>Prize Money: €100 (Winners) · €60 (Runners-up)</li>
    </ul>

    <a
      href="https://www.tickettailor.com/events/marathimandalireland1/2046923"
      target="_blank"
      rel="noopener noreferrer"
      className="varshik-link"
    >
      🎟️ Book Tickets Now →
    </a>
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
