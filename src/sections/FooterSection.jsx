/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';


const FooterSection = ({ children }) => (
  <footer className="footer-section">
    {children}
    <div className="disclaimer">

      Disclaimer: Images used on the website belong to their respective owners.
    </div>
    <p>

      &copy; kaushik.tech
      <span>
        {`2017 - ${(new Date()).getFullYear()}`}
      </span>
    </p>
  </footer>
);

FooterSection.defaultProps = {
  children: null,
};

FooterSection.propTypes = {
  children: PropTypes.any,
};


export default FooterSection;
