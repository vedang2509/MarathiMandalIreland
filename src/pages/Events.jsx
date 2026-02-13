const upcomingEvents = [
  {
    title: "Jallosh 2026",
    description: "A celebration of Marathi Cinema and Theatre",
    date: "30 August 2026",
    venue: "Church of Scientology & Community Centre, Firhouse Road, Dublin",
  }
];

const pastEvents = [
  {
    title: "Badminton Tournament",
    year: "2025",
  },
    {
    title: "Jallosh 2024",
    year: "2025",
  },
    {
    title: "Badminton Tournament",
    year: "2024",
  },
  {
    title: "Jallosh 2024",
    year: "2024",
  },
];

export default function Events() {
  return (
    <section className="events-page">
      <h1>Events</h1>

      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {upcomingEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p className="event-desc">{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
          </div>
        ))}
      </div>

      <h2>Past Events</h2>
      <ul className="past-events">
        {pastEvents.map((event, index) => (
          <li key={index}>
            {event.title} ({event.year})
          </li>
        ))}
      </ul>
    </section>
  );
}
