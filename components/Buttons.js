import React from 'react'

export default function Buttons() {
    return (
        <div className='buttons'>
            <button className='email-button'>
                <img src='../images/email-icon.png'/>
                Email
            </button>
            <button className='linkedin-button'>
                <img src='../images/linkedin.png'/>            
                LinkedIn
            </button>            
        </div>        
    )
}