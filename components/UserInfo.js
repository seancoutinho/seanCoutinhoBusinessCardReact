import React from 'react'
import Buttons from './Buttons'

export default function UserInfo() {
    return (
        <div className='userinfo-container'>
            <img src='../images/me.jpg' width='317px' height='317px' />
            <h1 className='username'>Sean Coutinho</h1>
            <p className='job-title'>Frontend Developer</p>
            <p className='user-website'>seancoutinho.co.zw</p>
            <Buttons />
        </div>        
    )
}