import React from 'react';
import '../styles/About.css';


function About() {
  

  return (
    <div>
      <div className='about'>
        <h1><span className='skills'>Skills</span></h1>
          <ul>
            <li className='item'>
              <h2>Front-End</h2>
              <span className='special'>ReactJS, Bootsrap, HTML, CSS, NPM, StyledComponenets, Redux, React Native</span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span className='special'>NodeJS, ExpressJS, MySQL, MongoDB</span>
            </li>
            <li className='item'>
              <h2>Langguage</h2>
              <span className='special'>JavaScript</span>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default About