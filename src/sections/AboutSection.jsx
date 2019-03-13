import React from 'react';


const AboutSection = () => (
  <section id="info" className="light--content" aria-label="Personal Information">
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
      </div>

      <div>
        <span className="address">
          <i className="fas fa-futbol" />
        </span>
        <ul className="hobby--list" aria-label="Hobbies">
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
  </section>
);

export default AboutSection;
