/* eslint-disable no-mixed-operators,no-bitwise */
import React from 'react';
import PropTypes from 'prop-types';


const shadeColor2 = (color, percent) => {
  const f = parseInt(color.slice(1), 16);
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;


  const R = f >> 16;
  const G = f >> 8 & 0x00FF;
  const
    B = f & 0x0000FF;
  return `#${(0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)}`;
};


const shadeRGBColor = (color, percent) => {
  const f = color.split(',');
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;


  const R = parseInt(f[0].slice(4), 10);
  const G = parseInt(f[1], 10);
  const
    B = parseInt(f[2], 10);
  return `rgb(${Math.round((t - R) * p) + R},${Math.round((t - G) * p) + G},${Math.round((t - B) * p) + B})`;
};

const shade = (color, percent) => {
  if (color.length > 7) return shadeRGBColor(color, percent);
  return shadeColor2(color, percent);
};


const SkillCard = ({
  name, percent, color, type,
}) => (
  <div
    className={`skillcard clearfix ${type}`}
    style={{ backgroundImage: `linear-gradient(${(color || '#88cd2a')}, ${shade((color || '#88cd2a'), -0.25)}, ${shade((color || '#88cd2a'), -0.45)})` }}
  >
    <div
      className="skillbar-title"
    >
      <span>
        {name}
      </span>
    </div>
    <div className="skill-bar-percent">
      {percent}
      <span>

%
      </span>
    </div>
  </div>
);

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string]).isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // width: PropTypes.number.isRequired,
};


export default SkillCard;
