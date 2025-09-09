import "./privacy-content.scss";

const PrivacyContent = () => {
  return (
    <div className="privacy-content">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>Information We Collect</h2>
          <p>
            This portfolio website is designed to showcase my work and skills. 
            We may collect the following types of information:
          </p>
          <ul>
            <li>Contact information you provide through contact forms</li>
            <li>Usage data and analytics to improve the website experience</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul>
            <li>Responding to your inquiries and messages</li>
            <li>Improving website functionality and user experience</li>
            <li>Analytics and performance monitoring</li>
          </ul>
        </section>

        <section>
          <h2>Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            This website may use third-party services for analytics, hosting, and other 
            functionality. These services have their own privacy policies.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through 
            the contact form on this website.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of 
            any changes by posting the new Privacy Policy on this page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyContent;
