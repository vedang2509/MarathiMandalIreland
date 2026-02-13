import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "from-reluctance-to-embrace",
    title: "From Reluctance to Embrace: My Journey of Becoming a True Punekar",
    author: "Chinmay Sahasrabudhe",
    date: "July 2024",
    excerpt:
      "A heartfelt reflection on identity, belonging, and embracing Puneri culture far away from home.",
  },
  {
    slug: "mumbai-to-dublin",
    title: "From Mumbai’s Charm to Dublin’s Greenery",
    author: "MMI Member",
    date: "July 2024",
    excerpt:
      "A journey of adapting to life in Ireland while carrying Mumbai’s spirit along.",
  },
  {
    slug: "struggle-to-success",
    title: "From Struggle to Success: My Empowering Journey with MMI",
    author: "MMI Member",
    date: "July 2024",
    excerpt:
      "How Marathi Mandal Ireland became a support system and second family.",
  },
];

export default function Blog() {
  return (
    <section className="blog-page">
      <h1>Blog</h1>
      <p className="blog-intro">
        Stories, experiences, and reflections from the Marathi community in Ireland.
      </p>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.slug}>
            <h2>{post.title}</h2>
            <p className="blog-meta">
              {post.author} · {post.date}
            </p>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="read-more">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
