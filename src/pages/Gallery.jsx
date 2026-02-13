const galleryImages = [
  {
    src: "/images/jallosh.jpg",
    title: "Jallosh – Marathi Cinema & Theatre",
  },
  {
    src: "/images/ganeshotsav.jpg",
    title: "Ganeshotsav Celebration",
  },
  {
    src: "/images/badminton.jpg",
    title: "Badminton Tournament",
  },
  {
    src: "/images/drawing.jpg",
    title: "Kids Drawing Competition",
  },
  {
    src: "/images/community.jpg",
    title: "Community Gathering",
  },
  {
    src: "/images/cultural.jpg",
    title: "Cultural Program",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-page">
      <h1>Gallery</h1>
      <p className="gallery-intro">
        A glimpse of celebrations, culture, and community moments from
        Marathi Mandal Ireland events.
      </p>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img.src} alt={img.title} />
            <div className="gallery-caption">{img.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
