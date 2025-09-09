import "./terms-content.scss";

const TermsContent = () => {
  return (
    <div className="terms-content">
      <div className="container">
        <h1>Terms of Use</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this portfolio website, you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>
        </section>

        <section>
          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on this website 
            for personal, non-commercial transitory viewing only. This is the grant of a license, 
            not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <p>
            The materials on this website are provided on an 'as is' basis. This website makes no 
            warranties, expressed or implied, and hereby disclaims and negates all other warranties 
            including without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property or 
            other violation of rights.
          </p>
        </section>

        <section>
          <h2>Limitations</h2>
          <p>
            In no event shall this website or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on this website, even if this 
            website or an authorized representative has been notified orally or in writing of the 
            possibility of such damage.
          </p>
        </section>

        <section>
          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on this website could include technical, typographical, or 
            photographic errors. This website does not warrant that any of the materials on its 
            website are accurate, complete, or current. This website may make changes to the 
            materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2>Links</h2>
          <p>
            This website has not reviewed all of the sites linked to its website and is not 
            responsible for the contents of any such linked site. The inclusion of any link does 
            not imply endorsement by this website of the site. Use of any such linked website is 
            at the user's own risk.
          </p>
        </section>

        <section>
          <h2>Modifications</h2>
          <p>
            This website may revise these terms of service for its website at any time without 
            notice. By using this website you are agreeing to be bound by the then current version 
            of these terms of service.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws 
            and you irrevocably submit to the exclusive jurisdiction of the courts in that state 
            or location.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us through 
            the contact form on this website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsContent;
