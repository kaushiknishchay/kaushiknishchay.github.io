import React from 'react';
import Loadable from 'react-loadable';

import projectsList from '../constants/projects';
import Loading from '../Loading';


const ProjectItem = Loadable({
  loader: () => import(/* webpackChunkName: "ProjectItem" */ '../components/ProjectItem'),
  loading: Loading,
});

const ProjectSection = () => (
  <section id="projects" className="light--content" aria-label="Projects made section">
    <h3 className="content--title">

      Projects
    </h3>

    <div className="projects--content">
      {
        projectsList.map(({
          name, position, type, desc, link,
        }) => (
          <ProjectItem
            type={type}
            key={name}
            title={name}
            subTitle={position}
            desc={desc}
            link={link}
          />
        ))
      }
    </div>
  </section>
);


export default ProjectSection;
