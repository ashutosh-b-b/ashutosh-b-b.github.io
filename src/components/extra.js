import * as React from 'react';

import "../styles/projects.css"

export default function ExtraCir() {
  return (
    <div className = "extra-main">
      <div className = "project-head">My Work</div>
      <div className = "projects-container">
        <div className = "card" id = "card-1">
          <div className = "card-head"><div>SciML: HighDimPDE.jl</div></div>
          <div className = "card-body">HighDimPDE is an open source Julia package for solving high dimensional PDEs using deep learning</div>
          <div className = "card-action">
            <div className='card-btn'>
              <p>View More</p>
            </div>
          </div>
        </div>

        <div className = "card" id = "card-2">
          <div className = "card-head"><div>NLP for Hinglish</div></div>
          <div className = "card-body">Implemented deep learning algorithms and pipeline for NLP tasks on Hindi English mixed corpus.</div>
          <div className = "card-action">
            <div className='card-btn'>
            <p>View More</p>
            </div>
          </div>
        </div>
        <div className = "card" id = "card-3">
          <div className = "card-head"><div>Quizio</div></div>
          <div className = "card-body">Quizio is an online platform for conducting exams and recruitments in IITR Campus</div>
          
          <div className = "card-action">
            <div className='card-btn'>
            <p>View More</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>


  );
}