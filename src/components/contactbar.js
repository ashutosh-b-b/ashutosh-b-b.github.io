import React, { useState } from 'react';
import "../styles/contactbar.css"
function ContactBar() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className='contact-bar-container'>
         <div className = "logo-empty-container"></div>
     
         <div className = "logo-container">
                <a className = "logo-link" href="https://github.com/ashutosh-b-b" target="_blank">
                    <div className ="visit-logo" id = "github-logo" />
                </a>
                <a className = "logo-link" href="https://www.linkedin.com/in/ashutoshbb/" target="_blank" >
                    <div className ="visit-logo" id = "linkedin-logo" />
                </a>
                <a className = "logo-link" href="mailto:a.bharambe123@gmail.com" target="_blank" >
                    <div className ="visit-logo" id = "mail-logo" />
                </a>
         </div>

    </div>

  );
}

export default ContactBar