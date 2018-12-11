/* eslint-disable no-param-reassign,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Loadable from 'react-loadable';

import Loading from './Loading';
import './assets/scss/styles.scss';
import HeaderBar from './components/HeaderBar';
import Footer from './sections/FooterSection';


const AboutSection = Loadable({
  loader: () => import(/* webpackChunkName: "AboutSection" */ './sections/AboutSection'),
  loading: Loading,
});

const ProjectSection = Loadable({
  loader: () => import(/* webpackChunkName: "ProjectSection" */ './sections/ProjectSection'),
  loading: Loading,
});

const SkillCardSection = Loadable({
  loader: () => import(/* webpackChunkName: "SkillCardSection" */ './sections/SkillCardSection'),
  loading: Loading,
});

const EducationSection = Loadable({
  loader: () => import(/* webpackChunkName: "EducationSection" */ './sections/EducationSection'),
  loading: Loading,
});

const ExperienceSection = Loadable({
  loader: () => import(/* webpackChunkName: "ExperienceSection" */ './sections/ExperienceSection'),
  loading: Loading,
});

// const ParticleBg = Loadable({
//   loader: () => import(/* webpackChunkName: "ParticleBg" */ './ParticleBg'),
//   loading: Loading,
// });


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

      lastUpdated: null,
    };
    window.addEventListener('load', this.callbackFunc);
    window.addEventListener('scroll', this.callbackFunc);
  }


  componentDidMount() {
    fetch('https://api.github.com/repos/kaushiknishchay/kaushiknishchay.github.io').then(
      resp => resp.json(),
    ).then((response) => {
      const lastUpdated = response.updated_at;
      this.setState({
        lastUpdated: new Date(lastUpdated).toDateString(),
      });
    }).catch(() => {
      // Error
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
      introText,
      lastUpdated,
    } = this.state;

    return (
      <div className="content">

        <div className="header-wrap" role="main" aria-label="Nishchay Kaushik introduction.">
          <HeaderBar />
          <div className="heading--title">
            <h1 className="main--heading">
              Nishchay Kaushik
            </h1>
            <h2 className="sub--heading">
              Software Developer
            </h2>

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
        <Footer />
      </div>
    );
  }
}
