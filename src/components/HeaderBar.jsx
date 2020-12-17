import React from 'react';

const socialLinks = [
  {
    name: 'kaushiknishchay',
    icon: 'linkedin',
    url: 'https://linkedin.com/in/kaushiknishchay',
  },
  {
    name: 'kaushik.nishchay',
    icon: 'instagram',
    url: 'https://instagram.com/kaushik.nishchay',
  },
  {
    name: 'kaushiknishchay',
    icon: 'github',
    url: 'https://github.com/kaushiknishchay',
  },
];

const HeaderBar = () => (
  <div className="header-bar" role="navigation">
    <div className="header-bar--links">
    </div>
    <div className="social--icons">
      {socialLinks.map(link => (
        <div key={link.icon} className="social--icon__item">
          <a href={link.url} title={`${link.icon}`}>
            <i className={`${link.icon}`} />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default HeaderBar;
