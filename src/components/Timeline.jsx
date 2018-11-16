import React from 'react';
import PropTypes from 'prop-types';


const Timeline = ({ data, dark }) => (
  <div className="timeline--container">
    <ul className={`timeline--line ${dark ? 'dark' : ''}`}>
      {
        data.map(({
          title, subTitle, date, desc,
        }) => (
          <li key={subTitle + title}>
            <div className="timeline_item--content">
              <div className="timeline_item--title">
                {title}
              </div>
              <div className="timeline_item--sub_title">
                {subTitle}
                <div className="timeline_item--time">
                  {date || ''}
                </div>
              </div>
              <div
                className="timeline_item--desc"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          </li>
        ))
      }
    </ul>
  </div>
);

Timeline.defaultProps = {
  dark: false,
};

Timeline.propTypes = {
  dark: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    date: PropTypes.string,
    desc: PropTypes.string,
  })).isRequired,
};


export default Timeline;
