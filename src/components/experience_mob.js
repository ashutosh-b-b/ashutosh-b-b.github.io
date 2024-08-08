import React, { useState } from 'react';
import "../styles/expmob.css"
import expdata from "../assets/exp_meta.json";
import ToggleButton from './toggle_button';
import { useInView } from 'react-intersection-observer';
import useCheckMobileScreen from './useMobileCheck';
import { isSafari } from 'react-device-detect';
function ExperienceMob(props) {

    const [exp1Ref, exp1InView, exp1Entry] = useInView({ threshold: 0.8, delay:100});
    const [exp2Ref, exp2InView, exp2Entry] = useInView({ threshold: 0.8 , delay:100});
    const [exp3Ref, exp3InView, exp3Entry] = useInView({ threshold:  0.8 , delay:100});
    const [exp4Ref, exp4InView, exp4Entry] = useInView({ threshold:  0.8, delay:100});

    const expsRef = [exp1Ref, exp2Ref, exp3Ref, exp4Ref]
    const expsEntries = [exp1Entry, exp2Entry, exp3Entry, exp4Entry]
    const expsViews = [exp1InView, exp2InView, exp3InView, exp4InView]


    const current_exp = expsViews.findIndex(i => i == true)
    console.log(current_exp)
    return(
        <div className='exp-main-container'>

            <div className='exp-head-mob'>Experience</div>    

            <div className='exp-container'>
                <div className='mobile-timeline'>
                    <div className='mobile-blobs-container'>
                            {
                                expdata.experience.map((exp, i) => 
                                    <div className='mobile-timeline-blob' id={current_exp == i ? "time-blob-active" : ""}></div>
                                
                                )
                            }
                    </div>
                    <div className='mobile-timeline-div'>
                        <div className='timeline-div-1'></div>
                        <div className='timeline-div-2'></div>
                    </div>
                </div>
                <div className='exp-times'>
                    {
                        expdata.experience.map((exp, i) => 
                            <div className='exp-time' id={current_exp == i ? "time-text-active" : ""}>{exp.time.split('–').at(-1)}</div>
                        
                        )
                    }
                </div>
                <div className='exp-carousel'>
                    {
                        expdata.experience.map((exp, i) =>
                            <div className='exp-mobile-card-container' ref={expsRef[i]}>
                                <div className='exp-mobile-title'>{exp.title}</div>
                                <div className='exp-mobile-time'>{exp.time}</div>
x                                <div className='exp-mobile-desc'>{exp.desc}</div>
                            </div>
                        )
                    }
                    {isSafari && <div className='exp-safari-placeholder'></div>}
                </div>

            </div>
            <ToggleButton id={!isSafari ? "toggle-button-exp" : "toggle-button-exp-safari"} entries={expsEntries} views={expsViews} allSectionViews={props.allSectionViews} allSectionEntries={props.allSectionEntries}></ToggleButton>

        </div>
    )
}
export default ExperienceMob