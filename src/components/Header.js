import React from 'react';
import './header.css';


export default function Main () {
        const header = {
            title: 'Favorite Soccer Teams Page',
            slogan: 'A simplified way to follow -ONLY- the teams you care about'
        }

    return (
        <div id='Header'>
            <div className='header-background'>
                <div className='nav-bar-container'>
                    <a href="/">Home</a>
                    <a href="#Login">Login</a>
                    <a href="#SignUp">Sign Up</a>
                </div>
                <div className='title-container'>
                 <h1>{header.title}</h1>
                 <h2>{header.slogan}</h2>
                </div>
            </div>
            
            
        </div>
        
    )
}