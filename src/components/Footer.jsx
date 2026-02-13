export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Marathi Mandal Ireland</h3>
          <p>
            A non-profit community organisation bringing together people of
            Marathi and Maharashtra background living in Ireland.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/events">Events</a></li>
            <li><a href="#/gallery">Gallery</a></li>
            <li><a href="#/blog">Blog</a></li>
            <li><a href="#/varshik-ank">वार्षिक अंक</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:info@irishmarathi.com">
              info@irishmarathi.com
            </a>
          </p>
          <p>Ireland</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Marathi Mandal Ireland. All rights reserved.
      </div>
    </footer>
  );
}
