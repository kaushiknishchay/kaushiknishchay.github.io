import React from 'react';
import { Particles } from 'react-particles-js';


const ParticleBg = () => (
  <Particles
    aria-label="Particles effect background"
    className="particles--container"
    params={{
      particles: {
        number: {
          value: 15,
          densityq: {
            enable: false,
            value_area: 800,
          },
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 2,
            color: '#b8b7ff',
          },
        },
        line_linked: {
          shadow: {
            enable: true,
            color: '#cdccd1',
            blur: 1,
          },
        },
      },
    }}
  />
);

export default ParticleBg;
