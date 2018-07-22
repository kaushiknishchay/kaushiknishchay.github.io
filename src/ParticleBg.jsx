import React from 'react';
import { Particles } from 'react-particles-js';


const ParticleBg = () => (
  <Particles
    className="particles--container"
    params={{
      particles: {
        number: {
          value: 10,
          densityq: {
            enable: false,
            value_area: 800,
          },
        },
        line_lginked: {
          shadow: {
            enable: true,
            color: '#3CA9D1',
            blur: 5,
          },
        },
      },
    }}
  />);

export default ParticleBg;
