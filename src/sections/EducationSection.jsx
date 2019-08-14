import React from 'react';
import educationList from '../constants/education';
import Loading from '../Loading';


const Timeline = React.lazy(() => import(/* webpackChunkName: "Timeline" */ '../components/Timeline'));

const EducationSection = () => (
  <section id="education" className="light--content" aria-label="Education qualification section">
    <h3 className="content--title">Education</h3>
    <React.Suspense fallback={<Loading />}>
      <Timeline data={educationList} />
    </React.Suspense>
    <br />
    <br />
  </section>
);


export default EducationSection;
