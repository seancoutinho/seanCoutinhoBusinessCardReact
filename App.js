import React from 'react'
import UserInfo from './components/UserInfo'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
export default function App() {
    return (
        <div className='card'>
            <UserInfo />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}