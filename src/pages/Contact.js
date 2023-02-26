import React from 'react';
import { GitHub } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../styles/Contact.css';

import { Button } from '@material-ui/core';


function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className='socialMedia'>
        <table>
          <tr>
            <LinkedInIcon className='profil'/>
                  <td>
              <Button href='https://www.linkedin.com/in/muhammad-alif-gunadi-276154266/'>alifgunadi</Button>
                  </td>
          </tr>
          <tr>
            <GitHub className='profil'/>
                <td>
              <Button href='https://github.com/alifgunadi'>alifgunadi</Button>
                </td>
          </tr>
          <tr>
            <Instagram className='profil'/>
                <td>
              <Button href='https://www.instagram.com/alifgunadi/'>alifgunadi</Button>
                </td>
          </tr>
        </table>
      </div>

    </div>
  )
}

export default Contact