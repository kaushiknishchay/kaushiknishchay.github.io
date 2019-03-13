import React from 'react';


const socialLinks = [
  {
    name: 'kaushiknishchay',
    icon: 'fa-linkedin',
    url: 'https://linkedin.com/in/kaushiknishchay',
  },
  {
    name: 'kaushik.nishchay',
    icon: 'fa-instagram',
    url: 'https://instagram.com/kaushik.nishchay',
  },
  {
    name: 'kaushiknishchay',
    icon: 'fa-github',
    url: 'https://github.com/kaushiknishchay',
  },
  {
    name: 'kaushiknishchay',
    icon: 'fas fa-envelope',
    url: 'mailto:n.kaushik.tech@gmail.com',
  },
  {
    name: 'kaushiknishchay',
    icon: 'fas fa-phone',
    url: 'tel:+917976334650',
  },
];

const HeaderBar = () => (
  <div className="header-bar" role="navigation">
    <div className="header-bar--links">
      <ul className="header-bar--links__list">
        <li className="header-bar--links__item">
          <a href="#experiences" title="experiences">

            Experiences
          </a>
        </li>
        <li className="header-bar--links__item">
          <a href="#skills" title="skills">

            Skills
          </a>
        </li>
        <li className="header-bar--links__item">
          <a href="#projects" title="projects">

            Projects
          </a>
        </li>
        <li className="header-bar--links__item">
          <a href="#education" title="education">

            Education
          </a>
        </li>
        <li className="header-bar--links__item">
          <a href="#info" title="personal info">

            Info
          </a>
        </li>
      </ul>
    </div>
    <div className="social--icons">
      {socialLinks.map(link => (
        <div key={link.icon} className="social--icon__item">
          <a href={link.url} title={`${link.icon.replace('fa-', '')} profile`}>
            <i className={`fab ${link.icon}`} />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default HeaderBar;
