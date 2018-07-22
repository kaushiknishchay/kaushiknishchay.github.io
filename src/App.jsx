import React, { Component } from 'react';
import axios from 'axios';

import './assets/scss/styles.scss';
import Timeline from './Timeline';
import ParticleBg from './ParticleBg';
import SkillBar from './SkillBar';
import ProjectItem from './ProjectItem';


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

      experiences: [
        {
          title: 'Software Developer',
          subTitle: 'CodeBrahma Technologies',
          date: 'MARCH 2018 - PRESENT',
          desc: 'Working as a React.JS and React Native developer.',
        },
        {
          title: 'Assistant System Engineer',
          subTitle: 'Tata Consultancy Services',
          date: 'FEB 2017 - MARCH 2018',
          desc:
            'Oracle Siebel Developer. Unit Tested and worked on Siebel OpenUI Framework.',
        },
        {
          title: 'Freelance Developer',
          subTitle: '',
          date: '2011 - JAN 2017',
          desc: `
          FullStack Developer and Android App Developer (Native & Hybrid)
          <br/><br/>
          <b>Responsibilities :</b> 
          <br/>
          <ul class="desc__list">
          <li>
            Development of Web Applications using latest frontend / backend technologies.
          </li>
          <li> 
            Have deep knowledge of designing and integrating Angular 2 Modules or use bootstrap.
          </li>
          <li>
            Have deep knowledge in PHP and in using Laravel framework for backend development.
          </li>
          <li>
            Able to design and create Android Apps be it Native or Hybrid (Ionic) and publish them at Play-Store.
          </li> 
          <li>
            Designing REST APIs to integrate in android apps.
          </li>
          <li>
            Implementing token based authentication in Node.JS.
          </li>
          </ul>
          
          <br/><br/>
          <b>Key Working Areas :</b>
          <ul class="desc__list">
          <li>
          Frontend : Angular 2/4, Angular Material, Bootstrap, HTML5, CSS3, JavaScript, TypeScript, React.JS, jQuery
          </li>
          <li>Backend : PHP, Node.JS</li>
          <li>App Development : Android Native, Ionic Framework (Hybrid App)</li>
          <li>Frameworks : Laravel (PHP), Express (NodeJS)</li>
          <li>Database : MySQL, MariaDB, Mongoose, MongoDB</li>
          <li>Software Version Control : Git</li>
          <li>Tools : Notepad++, Eclipse, Android Studio, PHPStorm, PyCharms, WebStorm</li>
          <li>Languages : Python, Java</li>
          </ul>
        `,
        },
      ],

      frontEndSkills: [
        {
          name: 'HTML / CSS / JS',
          percent: '90',
          color: '#f47721',
        },
        {
          name: 'React.JS + Redux',
          percent: '90',
          color: '#00aeff',
        },
        {
          name: 'Angular 2',
          percent: '70',
          color: '#8a0e25',
        },
      ],
      backEndSkills: [
        {
          name: 'PHP / MySQL / Laravel',
          percent: '85',
          color: '#b84592',
        },
        {
          name: 'NodeJS / ExpressJS / MongoDB',
          percent: '70',
          color: '#7fbb00',
        },
      ],
      programmingSkills: [
        {
          name: 'React Native',
          percent: '90',
          color: '#1c79c0',
        },
        {
          name: 'C, C++, Core Java',
          percent: '75',
          color: '#788cb6',
        },
        {
          name: 'Python',
          percent: '75',
          color: '#ffcc2f',
        },
        {
          name: 'Android',
          percent: '75',
          color: '#76b852',
        },
      ],

      projectsList: [
        {
          name: 'CB React Components',
          position: 'React native developer',
          type: 'react',
          desc: `
            <b>Responsibility</b> : 
            An internal CodeBrahma React Native app with reusable and customizable components.
            <br><br>
            <b>Technologies Used : </b> 
            React.JS, React Native, Styled Components, Redux, Redux Sagas`,
        }, {
          name: 'Hacker News App',
          position: 'React native developer',
          type: 'react',
          desc: `
          <b>Responsibility</b> : 
          React Native app built using the 
          Hacker News API
          to show Top, New and Best stories.
          <br><br>
          <b>Technologies Used : </b> 
          React.JS, React Native, RxJS, Redux, 
          Reselect, Normalizr`,
        }, {
          name: 'Cloud Backup App',
          position: 'React native developer',
          type: 'react',
          desc: `
            <b>Responsibility</b> : 
            React Native app which backup photos on device to a local server using a scheduled service.
            <br><br>
            <b>Technologies Used : </b> 
            React.JS, React Native, RxJS, Redux, Redux Sagas, Realm`,
        }, {
          name: 'Siebel CRM',
          position: 'Siebel Developer',
          type: 'siebel',
          desc: `<b>Responsibility</b> : 
                Created Workflows, WebServices etc. and worked on OpenUI.`,
        }, {
          name: 'Hand Gesture Recognition',
          position: 'Programmer',
          type: 'python',
          desc: `<b>Details</b> : 
                Detecting Hand Gesture and movement by using OpenCV library for Python and perform actions based on
the gesture detected e.g., Mouse Left or Right Click.
          <br><br>
          <b>Programming Language</b> : Python`,
        }, {
          name: 'PicSquare',
          position: 'Android Developer',
          type: 'android',
          desc: `
            <b>Details</b> : 
             A sample Android Application which
             allows to convert images in square.
             Developed as a part to test Image
             APIs of android and for knowledge purpose.
          <br><br>
          <b>Tools Used</b> : 
             Android Studio
          <br><br>
          <b>Programming Language</b> : Java
          `,
        }, {
          name: 'MobiGo',
          position: 'Android Developer',
          type: 'android',
          desc: `
            <b>Details</b> : 
             MobiGo was an Android App Store which allowed users to download android apps. Created the app using Java and integrated various 3rd Party libraries to enhance UI and functionality. Created REST API in PHP.
          <br><br>
          <b>Tools Used</b> : 
             Android Studio, PHPStorm, Notepad++, HeidiSQL
          <br><br>
          <b>Programming Language</b> : 
              Java
          `,
        }, {
          name: 'DealsUpto',
          position: 'FullStack Developer (PHP)',
          type: 'php',
          desc: `
            <b>Details</b> : 
             Created a full fledged website which allows creating posts regarding various offers, in simple terms a blog post. Created an admin Panel to allow modification or addition of various data, viz. Categories, Posts, User Comments etc.
          <br><br>
          <b>Tools Used</b> : 
             PHPStorm, Notepad++
          <br><br>
          <b>Technologies Used</b> : 
              PHP, MySQL, HTML/CSS/JS, BootStrap
          `,
        }, {
          name: 'PicturesOfJoy',
          position: 'FullStack Developer (PHP)',
          type: 'php',
          desc: `
            <b>Details</b> : 
              PicturesOfJoy was a photograph showcasing
              website. Its frontend was build using
              React.JS + Redux, for Backend PHP Laravel
              framework was used. It also has an Admin
              Panel created using the same, and has token
              based authentication.
          <br><br>
          <b>Tools Used</b> : 
             WebStorm, PHPStorm, Notepad++, HeidiSQL
          <br><br>
          <b>Technologies Used</b> : 
              PHP, MySQL, React.JS, Redux, ES6 JavaScript 
          `,
        }, {
          name: 'Kaushik.tech',
          position: 'Web Developer (React)',
          type: 'react',
          desc: `
            <b>Details</b> : 
             Responsive Personal Website created using React.JS
          <br><br>
          <b>Tools Used</b> : 
             WebStorm
          <br><br>
          <b>Technologies Used</b> : 
              React.JS, HTML/CSS/JS
         `,
        },
      ],

      education: [
        {
          title: 'Bachelor of Technology',
          subTitle: 'Information Technology',
          date: '2012 - 2016',
          desc: `
            College of Technology & Engineering, Udaipur
            <br><br>
            OGPA Scored: 7.0
          `,
        }, {
          title: '12th',
          subTitle: 'CBSE',
          date: '2012',
          desc: `
            Maa Bharti School, Kota
            <br><br>
            Percentage Scored: 74.6% 
          `,
        }, {
          title: '10th',
          subTitle: 'CBSE',
          date: '2010',
          desc: `
            St. Anthony’s Sr. Sec. School, Udaipur
            <br><br>
            CGPA: 9.0
          `,
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
                onclick="ga('send', 'event', 'Download', 'resume', 'version 1');"
              >
                Download Resume
              </a>
            </p>

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
                name, position, type, desc,
              }) => (
                <ProjectItem
                  type={type}
                  key={name}
                  title={name}
                  subTitle={position}
                  desc={desc}
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
