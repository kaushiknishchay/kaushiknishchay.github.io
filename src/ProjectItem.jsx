import React from 'react';
import PropTypes from 'prop-types';


const ProjectItem = ({
  title, subTitle, desc, type,
}) => (
  <div className={`project--item ${type || ''}`}>
    <h3 className="project--item__heading">
      {title}
    </h3>
    <span
      className="project--item__sub-heading"
    >
      {subTitle}
    </span>
    <p
      className="project--item__desc"
      dangerouslySetInnerHTML={{ __html: desc || '' }}
    />
  </div>
);
ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  desc: PropTypes.string,
  type: PropTypes.string,
};

export default ProjectItem;
