import React from 'react';


const ContactMeSection = () => (
  <section id="contact-us" className="light--content" aria-label="Contact Us">
    <h3 className="content--title">

      Get In Touch
    </h3>
    <div className="contact-wrap">
      <form>
        <div className="form-row">
          <label htmlFor="name">

            Name
          </label>
          <input type="text" id="name" placeholder="What do people call you?" />
        </div>
        <div className="form-row">
          <label htmlFor="email">

            Email
          </label>
          <input type="text" id="email" placeholder="What's your email address?" />
        </div>

        <div className="form-row">
          <label htmlFor="email_body">

            &nbsp;
          </label>
          <textarea id="email_body" placeholder="How are you? What would you like to say?" rows="4" />
        </div>

        <div className="form-row">
          <input type="button" value="Send" />
        </div>
      </form>
    </div>
  </section>
);

export default ContactMeSection;
