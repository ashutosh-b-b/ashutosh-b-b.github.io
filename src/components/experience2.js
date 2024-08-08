import React, { useState } from 'react';
import "../styles/exptimeline.css"
import expdata from "../assets/exp_meta.json";
import ExpCard from './expcard';
function Experience2() {
  // Declare a new state variable, which we'll call "count"

  const [count, setCount] = useState(0);

  return (
    <div className='exp-main-container'>
        <div className='exp-head'>Experience</div>
        <div className='exp-timeline-container'>
          <div className='exp-timeline-upper'>
              {
                expdata.experience.map((exp, idx) => 
                  idx%2 == 0 && <ExpCard 
                      position = "upper"
                      time = {exp.time}
                      title = {exp.title}
                      description = {exp.desc}
                    />
                )
              }

          </div>

          <div className='exp-timeline-below'>
              {
                expdata.experience.map((exp, idx) => 
                  idx%2 != 0 && <ExpCard 
                      position = "lower"
                      time = {exp.time}
                      title = {exp.title}
                      description = {exp.desc}
                    />
                )
              }
          </div>
        </div>
    </div>

  );
}

export default Experience2