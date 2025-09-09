import { Link } from "react-router-dom";
import "./oauth-homepage.scss";

const OAuthHomepage = () => {
  return (
    <div className="oauth-homepage">
      <div className="container">
        <main className="main-content">
          <section>
            <h2>About This Application</h2>
            <p>
              This is the personal portfolio website of nt4rever, a software engineer 
              specializing in full-stack development with modern web technologies.
            </p>
            
            <h3>Application Features</h3>
            <ul>
              <li>Portfolio showcase with projects and work experience</li>
              <li>Contact form for professional inquiries</li>
              <li>Resume and skills presentation</li>
              <li>Professional networking and communication</li>
            </ul>
          </section>

          <section>
            <h2>Data Usage & Privacy</h2>
            <p>This application may request access to your Google account for:</p>
            <ul>
              <li><strong>Profile Information:</strong> To personalize your experience</li>
              <li><strong>Email Address:</strong> To respond to your inquiries</li>
              <li><strong>Basic Account Info:</strong> For authentication and spam prevention</li>
            </ul>
            
            <p>
              <strong>Privacy Commitment:</strong> We only use your data for the purposes listed above. 
              We do not sell, share, or use your data for advertising.
            </p>
            
            <div className="privacy-policy-link">
              <h4>Privacy Policy</h4>
              <p>
                For detailed information about how we collect, use, and protect your data, 
                please read our complete <Link to="/privacy" className="privacy-link">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          <section>
            <h2>Application Owner</h2>
            <p><strong>Developer:</strong> nt4rever</p>
            <p><strong>Role:</strong> Software Engineer</p>
            <p><strong>Contact:</strong> Available through the contact form on this website</p>
          </section>

          <section>
            <h2>Navigation</h2>
            <div className="nav-links">
              <Link to="/">Portfolio Home</Link>
              <Link to="/work">Work Experience</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>&copy; 2024 nt4rever. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <a href="https://github.com/nt4rever" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OAuthHomepage;
