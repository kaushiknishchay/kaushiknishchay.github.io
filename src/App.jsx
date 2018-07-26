import React, { Component } from 'react';
import axios from 'axios';
import Loadable from 'react-loadable';

import './assets/scss/styles.scss';
import Loading from './Loading';
import Skills from './constants/skills';
import experiences from './constants/experiences';
import education from './constants/education';
import projects from './constants/projects';


const Timeline = Loadable({
  loader: () => import(/* webpackChunkName: "Timeline" */ './Timeline'),
  loading: Loading,
});

const ParticleBg = Loadable({
  loader: () => import(/* webpackChunkName: "ParticleBg" */ './ParticleBg'),
  loading: Loading,
});

const SkillBar = Loadable({
  loader: () => import(/* webpackChunkName: "SkillBar" */ './SkillBar'),
  loading: Loading,
});

const ProjectItem = Loadable({
  loader: () => import(/* webpackChunkName: "ProjectItem" */ './ProjectItem'),
  loading: Loading,
});


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introText: `
        I'm a Bengaluru (India) based React.JS,
        React Native developer,
        PHP & Angular Developer,
        Python, Android Developer and Ionic Developer.
      `,

      socialLinks: [
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
      ],
      experiences,

      frontEndSkills: Skills.frontEndSkills,
      backEndSkills: Skills.backEndSkills,
      programmingSkills: Skills.programmingSkills,

      projectsList: projects,

      education,

      lastUpdated: null,
    };
    window.addEventListener('load', this.callbackFunc);
    window.addEventListener('scroll', this.callbackFunc);
  }


  componentDidMount() {
    axios
      .get('https://api.github.com/repos/kaushiknishchay/kaushiknishchay.github.io')
      .then((res) => {
        if (res.status === 200) {
          const lastUpdated = res.data.updated_at;
          this.setState({
            lastUpdated: new Date(lastUpdated).toDateString(),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  callbackFunc = () => {
    const items = document.querySelectorAll(
      '.timeline--container > ul.timeline--line > li > .timeline_item--content',
    );

    for (let i = 0; i < items.length; i++) {
      if (
        this.elementInViewport2(items[i])
        || this.isElementInViewport(items[i])
      ) {
        items[i].parentElement.classList.add('in-view');
      }
    }
  };

  elementInViewport2 = (el) => {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight
      && left < window.pageXOffset + window.innerWidth
      && top + height > window.pageYOffset
      && left + width > window.pageXOffset
    );
  };

  isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0
      && rect.left >= 0
      && rect.bottom
      <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  render() {
    /*
                  updated_at
                  */
    const {
      socialLinks,
      introText,
      experiences,
      projectsList,
      frontEndSkills,
      backEndSkills,
      programmingSkills,
      education,
      lastUpdated,
    } = this.state;

    return (
      <div className="content">
        <div className="header-bar">
          <div className="header-bar--links">
            <ul className="header-bar--links__list">
              <li className="header-bar--links__item">
                <a href="#experiences">
                  Experiences
                </a>
              </li>
              <li className="header-bar--links__item">
                <a href="#skills">
                  Skills
                </a>
              </li>
              <li className="header-bar--links__item">
                <a href="#projects">
                  Projects
                </a>
              </li>
              <li className="header-bar--links__item">
                <a href="#education">
                  Education
                </a>
              </li>
              <li className="header-bar--links__item">
                <a href="#info">
                  Info
                </a>
              </li>
            </ul>
          </div>
          <div className="social--icons">
            {socialLinks.map(link => (
              <div key={link.icon} className="social--icon__item">
                <a href={link.url}>
                  <i className={`fab ${link.icon}`} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <ParticleBg />
        <div className="heading--title">
          <h1 className="main--heading">
            Nishchay Kaushik
          </h1>
          <h4 className="sub--heading">
            Software Developer
          </h4>

          <div className="description">
            {introText}
            <p
              style={{
                marginTop: '3em',
              }}
            >
              <a
                href="./resume_new.pdf"
                className="download_cv"
                onClick="ga('send', 'event', 'Download', 'resume', 'version 1');"
              >
                Download Resume
              </a>
            </p>
          </div>
          {
            lastUpdated
            && (
              <span className="last--updated">
                                Last Updated at:
                {' '}
                {lastUpdated || ''}
              </span>
            )
          }
        </div>

        <section id="experiences" className="light--content">
          <h3 className="content--title">
            Experiences
          </h3>

          <Timeline data={experiences} />
          <br />
          <br />
        </section>

        <section id="skills" className="dark--content">
          <h3 className="content--title">
            Skills
          </h3>

          <div className="content--body">
            <div className="col">
              <h2>
                Frontend
              </h2>
              <br />
              {frontEndSkills.map(({ name, percent, color }) => (
                <SkillBar
                  key={name}
                  percent={percent}
                  name={name}
                  color={color}
                />
              ))}
            </div>
            <div className="col">
              <h2>
                Backend
              </h2>
              <br />
              {backEndSkills.map(({ name, percent, color }) => (
                <SkillBar
                  key={name}
                  percent={percent}
                  name={name}
                  color={color}
                />
              ))}
            </div>
            <div className="col">
              <h2>
                Programming / Mobile
              </h2>
              <br />
              {programmingSkills.map(({ name, percent, color }) => (
                <SkillBar
                  key={name}
                  percent={percent}
                  name={name}
                  color={color}
                />
              ))}
            </div>
          </div>
          <br />
          <br />
        </section>
        <section id="projects" className="light--content">
          <h3 className="content--title">
            Projects
          </h3>

          <div className="projects--content">
            {
              projectsList.map(({
                                  name, position, type, desc, link,
                                }) => (
                <ProjectItem
                  type={type}
                  key={name}
                  title={name}
                  subTitle={position}
                  desc={desc}
                  link={link}
                />
              ))}
          </div>
        </section>

        <section id="education" className="dark--content">
          <h3 className="content--title">
            Education
          </h3>

          <Timeline dark data={education} />
          <br />
          <br />
        </section>

        <section id="info" className="light--content">
          <h3 className="content--title">
            Personal Info
          </h3>

          <div className="personal-info--content">
            <div>
              <span>
                                Full Name
              </span>
              Nishchay Kaushik
            </div>

            <div>
              <span>
                                D.O.B
              </span>
              8 March 1996
            </div>

            <div>
              <span className="email">
                <i className="fas fa-at" />
              </span>
              <a
                href="mailto:n.kaushik.tech@gmail.com?"
                className="about-links"
              >
                n.kaushik.tech@gmail.com
              </a>
            </div>

            <div>
              <span className="phone">
                <i className="fas fa-phone" />
              </span>
              +91 - 7976334650
              <br />
              +91 - 9461546453
              <br />
            </div>

            <div>
              <span className="address">
                <i className="fas fa-map-marker" />
              </span>
              673, Hiran Magri
              <br />
              Sector 11
              <br />
              Udaipur (Rajasthan) - 313001
            </div>

            <div>
              <span className="address">
                <i className="fas fa-futbol" />
              </span>
              <ul className="hobby--list">
                <li>
                  Listening to Music
                </li>
                <li>
                  Travelling
                </li>
                <li>
                  Playing Computer Games
                </li>
                <li>
                  Photography
                </li>
                <li>
                  Binge Watching TV Series
                </li>
                <li>
                  Playing Football
                </li>
              </ul>
            </div>

          </div>
          <br />
          <br />
        </section>
        <footer>
          <p>
            &copy; Kaushik.tech
            <span>
                            2017 - 2018
            </span>
          </p>
        </footer>
      </div>
    );
  }
}
