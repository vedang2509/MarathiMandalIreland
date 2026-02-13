import { useParams } from "react-router-dom";

const posts = {
  "from-reluctance-to-embrace": {
    title:
      "From Reluctance to Embrace: My Journey of Becoming a True Punekar",
    author: "Chinmay Sahasrabudhe",
    date: "July 2024",
    content: `
Moving to a new city often brings a mix of excitement and hesitation.
Living away from Pune made me realise how deeply culture shapes identity...

(Full article content can be added here)
`,
  },

  "mumbai-to-dublin": {
    title: "From Mumbai’s Charm to Dublin’s Greenery",
    author: "MMI Member",
    date: "July 2024",
    content: `
The transition from Mumbai’s fast pace to Dublin’s calm greenery
was both refreshing and challenging...

(Full article content here)
`,
  },

  "struggle-to-success": {
    title:
      "From Struggle to Success: My Empowering Journey with MMI",
    author: "MMI Member",
    date: "July 2024",
    content: `
MMI played a vital role in helping me settle into life in Ireland.
From friendships to festivals, it became home away from home...

(Full article content here)
`,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return <p style={{ padding: "2rem" }}>Post not found.</p>;
  }

  return (
    <section className="blog-post">
      <h1>{post.title}</h1>
      <p className="blog-meta">
        {post.author} · {post.date}
      </p>
      <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
    </section>
  );
}
