/* eslint-disable no-param-reassign,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import HeaderBar from './components/HeaderBar';

import './style/styles.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      introText: `
        I'm a Bengaluru (India) based developer.
        I work on JavaScript, React.JS, React Native, Node.JS, Python.
      `,

      lastUpdated: null,
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/kaushiknishchay/kaushiknishchay.github.io')
      .then(
        resp => resp.json(),
      )
      .then((response) => {
        const lastUpdated = response.updated_at;
        this.setState({
          lastUpdated: new Date(lastUpdated).toDateString(),
        });
      })
      .catch(() => {
        // Error
      });
  }
  
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
            <h1 className="main--heading">Nishchay Kaushik</h1>
            <h2 className="sub--heading">Software Development Engineer - II</h2>

            <div className="description">
              {introText}
              <p
                style={{
                  marginTop: '3em',
                }}
              >
                <a
                  href={"/resume/NishchayKaushik_Resume.pdf"}
                  className="download_cv"
                  onClick={'ga(\'send\', \'event\', \'Download\', \'resume\', \'version 1\');'}
                >
                  Resume
                </a>
              </p>
            </div>
          </div>
          {
            lastUpdated && (
              <span className="last--updated">
                {`Last Updated at: ${lastUpdated || ''}`}
              </span>
            )
          }
        </div>
      </div>
    );
  }
}
