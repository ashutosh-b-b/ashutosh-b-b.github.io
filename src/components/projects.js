import * as React from 'react';

import "../styles/projects.scss"
import ProjectCard from './projectcard';
import ToggleButton from './toggle_button';
import useCheckMobileScreen from './useMobileCheck'
import { useRef,  useEffect, useCallback, useState} from "react";
import { useInView } from "react-intersection-observer";
import { getThemeProps } from '@mui/system';
import { useSlotProps } from '@mui/base';

export default function ProjectBar(props) {
  const onMobile = useCheckMobileScreen()

  const [project1Ref, project1InView, project1Entry] = useInView({ threshold: 0.8 });
  const [project2Ref, project2InView, project2Entry] = useInView({ threshold: 0.8 });
  const [project3Ref, project3InView, project3Entry] = useInView({ threshold: 0.8 });

  return (
    <div className = "project-main">
      <div className = "project-head">My Work</div>
      <div className = "projects-container">
      <ProjectCard 
          head = "HighDimPDE.jl"
          body = "HighDimPDE is an open source Julia package for solving high dimensional PDEs using deep learning"
          projref = {project1Ref}
          additional_id = "first-project"
          class_addon = {onMobile && project1InView ? " hover" : ""}
        />
        <ProjectCard 
          head = "NLP for Hinglish"
          body = "Implemented deep learning algorithms and pipeline for NLP tasks on Hindi English mixed corpus."
          projref = {project2Ref}
          class_addon = {onMobile && project2InView ? " hover" : ""}
        />
        <ProjectCard 
          head = "Quizio"
          body = "Quizio is an online platform for conducting exams and recruitments in IITR Campus"
          projref = {project3Ref}
          additional_id = "last-project"
          class_addon = {onMobile && project3InView ? " hover" : ""}
        />
       
    </div>
      {onMobile && <ToggleButton id={"toggle-button-projects"} entries={[project1Entry, project2Entry, project3Entry]} views={[project1InView, project2InView, project3InView]} allSectionViews={props.allSectionViews} allSectionEntries={props.allSectionEntries}></ToggleButton>}
    </div>


  );
}