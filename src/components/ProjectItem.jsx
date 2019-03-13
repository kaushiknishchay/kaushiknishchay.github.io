import React from 'react';
import PropTypes from 'prop-types';


const ProjectItem = ({
  title, subTitle, desc, type, link,
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
    {
        link
        && (
          <span className="project--item__link">
            <a href={link}>

              View More &rarr;
            </a>
          </span>
        )
      }
  </div>
);
ProjectItem.defaultProps = {
  link: null,
  desc: '',
  type: '',
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  desc: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
};

export default ProjectItem;
