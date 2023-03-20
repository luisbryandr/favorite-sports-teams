import React from 'react';
import './header.css';


export default function Header () {
        const header = {
            title: 'Favorite Teams Page',
            slogan: 'If you have ever wanted a simple application to follow ONLY your favorite teams, then this app is for you!'
        }

    return (
        <div className='header'>
            <div className='nav-bar-container'></div>
            <div className='title-container'>
                <h1>{header.title}</h1>
                <h2>{header.slogan}</h2>
            </div>
            
        </div>
        
    )
}