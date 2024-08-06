import * as React from 'react';

import "../styles/projects.scss"
import ProjectCard from './projectcard';
export default function ProjectBar() {
  return (
    <div className = "project-main">
      <div className = "project-head">My Work</div>
      <div className = "projects-container">
      <ProjectCard 
          head = "SciML: HighDimPDE.jl"
          body = "HighDimPDE is an open source Julia package for solving high dimensional PDEs using deep learning"
        />
        <ProjectCard 
          head = "NLP for Hinglish"
          body = "Implemented deep learning algorithms and pipeline for NLP tasks on Hindi English mixed corpus."
        />
        <ProjectCard 
          head = "Quizio"
          body = "Quizio is an online platform for conducting exams and recruitments in IITR Campus"
        />
       
      </div>
    </div>


  );
}