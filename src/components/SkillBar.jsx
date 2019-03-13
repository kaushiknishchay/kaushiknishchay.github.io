import React from 'react';
import PropTypes from 'prop-types';


const SkillBar = ({
  name, percent, color,
}) => (
  <div
    className="skillcard clearfix"
  >
    <div
      className="skillbar-title"
      style={{ backgroundColor: (color || '#88cd2a') }}
    >
      <span>
        {name}
      </span>
    </div>
    <div
      className="skillbar-bar"
      style={{
        backgroundColor: (color || '#88cd2a'),
        width: `${percent}%`,
      }}
    />
    <div className="skill-bar-percent">
      {percent}

      %
    </div>
  </div>
);

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string]).isRequired,
  color: PropTypes.string.isRequired,
  // width: PropTypes.number.isRequired,
};


export default SkillBar;
