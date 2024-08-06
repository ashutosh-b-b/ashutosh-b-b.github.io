import React, { useState } from 'react';
import "../styles/experience.css"
import expdata from "../assets/exp_meta.json";

function Experience() {
  // Declare a new state variable, which we'll call "count"

  const [count, setCount] = useState(0);

  return (
    <div className='exp-main-container'>
        <div className='exp-head'>Experience</div>
        <div className='experience-container'>
        {expdata.experience.map((exp) => (

            <div className = 'experience-row'>
                <div className = 'experience-time'><p>{exp.time}</p></div>
                <div className = 'experience-title'><p>{exp.title}</p></div>
                <div className = 'experience-desc'><p>{exp.desc}</p></div>
            </div>
            
        ))}

        </div>
    </div>

  );
}

export default Experience