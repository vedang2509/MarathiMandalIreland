const galleryImages = [
  {
    src: "/images/Jallosh.jpg",
    title: "Jallosh – Marathi Cinema & Theatre",
  },
  {
    src: "/images/ganeshotsav.jpg",
    title: "Ganeshotsav Celebration",
  },
  {
    src: "/images/badminton.jpeg",
    title: "Badminton Tournament",
  },
  {
    src: "/images/drawing.png",
    title: "Kids Drawing Competition",
  },
  {
    src: "/images/community.jpeg",
    title: "Community Gathering",
  },
  {
    src: "/images/cultural.png",
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
