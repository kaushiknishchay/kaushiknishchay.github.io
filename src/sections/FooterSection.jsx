import React from 'react';


const FooterSection = ({ children }) => (
  <footer className="footer-section">
    {children}
    <div className="disclaimer">
      Disclaimer: Images used on the website belong to their respective owners.
    </div>
    <p>
      &copy; kaushik.tech
      <span>
          2017 - 2018
      </span>
    </p>
  </footer>
);

export default FooterSection;
