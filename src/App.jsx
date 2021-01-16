import React, { Component } from 'react';
import SideItem from './SideItem';

import githubIcon from './assets/github.svg';
import linkedInIcon from './assets/linkedin.svg';
import blogIcon from './assets/blog.svg';

import './style/styles.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastUpdated: null,
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/kaushiknishchay/kaushiknishchay.github.io')
      .then(resp => resp.json())
      .then((response) => {
        const lastUpdated = response.updated_at;
        if (lastUpdated) {
          this.setState({
            lastUpdated: new Date(lastUpdated).toDateString(),
          });
        }
      })
      .catch(() => {
      // Error
      });
  }

  render() {
    const {
      lastUpdated,
    } = this.state;

    return (
      <div
        className="container"
      >
        <div
          id="main_content"
          className="main_content"
          role="main"
          aria-label="Nishchay Kaushik introduction."
        >
          <div className="info_wrapper">
            <h1 className="name_text">
              Nishchay Kaushik
            </h1>
            <h2 className="job_text">
              SDE 2 @ HackerRank
            </h2>
            <div className="other_info">
              <p>
                I
                am an Engineer with 4 years of experience. I primarily work with
                JavaScript(ES6) &amp; React and have hands-on experience with Node.JS, Ruby on
                Rails, Python, Java and Golang.
                <br />
                <br />
              </p>
              <p>
                Other technologies I have worked with includes Kubernetes, Docker, Google Cloud,
                AWS.
              </p>
            </div>
            <div className="resume_wrapper">
              <a href="./resume/NishchayKaushik_Resume.pdf">
                Resume
              </a>
            </div>
            {lastUpdated && (
              <div className="update_info">
                {`Website last updated on ${lastUpdated}`}
              </div>
            )}
          </div>

          <div
            className="side_wrapper"
          >
            <SideItem light>
              <img
                className="github_stats"
                src="https://github-readme-stats.vercel.app/api/top-langs/?hide_border=true&username=kaushiknishchay&layout=compact&langs_count=20"
                alt="github lang stats"
              />
            </SideItem>
            <SideItem>
              <div className="flex">
                <a href="https://github.com/kaushiknishchay/" className="social_link">
                  <img src={githubIcon} alt="github profile" className="social_icon" />
                </a>
                <a href="https://linkedin.com/in/kaushiknishchay" className="social_link">
                  <img src={linkedInIcon} alt="LinkedIn profile" className="social_icon" />
                </a>
                <a href="https://medium.com/@kaushik.tech" className="social_link">
                  <img src={blogIcon} alt="blog @medium" className="social_icon" />
                </a>
              </div>
            </SideItem>
          </div>
        </div>
      </div>
    );
  }
}
