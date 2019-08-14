import React from 'react';

import projectsList from '../constants/projects';
import Loading from '../Loading';


const ProjectItem = React.lazy(() => import(/* webpackChunkName: "ProjectItem" */ '../components/ProjectItem'));

const ProjectSection = () => (
  <section id="projects" className="light--content" aria-label="Projects made section">
    <h3 className="content--title">Projects</h3>

    <div className="projects--content">
      {
        projectsList.map(({
          name, position, type, desc, link,
        }) => (
          <React.Suspense fallback={<Loading />}>
            <ProjectItem
              type={type}
              key={name}
              title={name}
              subTitle={position}
              desc={desc}
              link={link}
            />
          </React.Suspense>
        ))
      }
    </div>
  </section>
);


export default ProjectSection;
