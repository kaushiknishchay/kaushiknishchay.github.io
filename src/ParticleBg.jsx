import React from 'react';
import { Particles } from 'react-particles-js';


const ParticleBg = () => (
  <Particles
    className="particles--container"
    params={{
      particles: {
        number: {
          value: 12,
          densityq: {
            enable: false,
            value_area: 800,
          },
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 2,
            color: '#fff',
          },
        },
        line_linkedd: {
          shadow: {
            enable: true,
            color: '#3CA9D1',
            blur: 1,
          },
        },
      },
    }}
  />);

export default ParticleBg;
