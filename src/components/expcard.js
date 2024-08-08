import React, { useState } from 'react';
import "../styles/exptimeline.css"
import expdata from "../assets/exp_meta.json";

function ExpCard(props) {
    return(
        <div className = {'exp-card-container ' + props.position}>
            <div className = 'exp-card-connector'>
                <div className='exp-connector-1'>
                    {props.position == "lower" && <div className='exp-blob'></div>}
                </div>
                <div className='exp-connector-2'>
                    {props.position == "upper" && <div className='exp-blob'></div>}
                </div>
            </div>
        <div className='exp-card'>
            <div className='exp-card-content'>
                <div className='exp-card-title'>{props.title}</div>
                <div className='exp-card-time'>{props.time}</div>
                <div className='exp-card-desc'>{props.description}</div>
            </div>
        </div>
      </div>
    )
}
export default ExpCard