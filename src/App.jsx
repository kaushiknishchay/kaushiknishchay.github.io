/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import axios from 'axios';
import Loadable from 'react-loadable';

import Loading from './Loading';
import './assets/scss/styles.scss';
import AboutSection from './sections/AboutSection';
import ProjectSection from './sections/ProjectSection';
import SkillCardSection from './sections/SkillCardSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';


const ParticleBg = Loadable({
  loader: () => import(/* webpackChunkName: "ParticleBg" */ './ParticleBg'),
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
        // pass
      });
  }


  callbackFunc = () => {
    const items = document.querySelectorAll(
      '.timeline--container > ul.timeline--line > li > .timeline_item--content',
    );

    for (let i = 0; i < items.length; i += 1) {
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
    const {
      socialLinks,
      introText,
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

        <ExperienceSection />

        <SkillCardSection />

        <ProjectSection />

        <EducationSection />

        <AboutSection />

        <footer>
          <p>
            &copy; kaushik.tech
            <span>
              2017 - 2018
            </span>
          </p>
        </footer>
      </div>
    );
  }
}
