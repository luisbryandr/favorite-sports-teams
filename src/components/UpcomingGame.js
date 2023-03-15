import React, { useState, useEffect } from "react";
import axios from 'axios';


//will need to move to a separate file

//team=529&next=3
const FIXTURES_URL = 'https://v3.football.api-sports.io/fixtures?season=2022&' 
    const API_REQUEST_HEADERS = {
            'X-RapidAPI-Host': 'v3.football.api-sports.io',
            'x-rapidapi-key': '953200a1e98efd99b0adee31b6175653'
        };

export default function UpcomingGame (props) {
    const { team } = props

    const [upcomingGames, setUpcomingGames] = useState([]);
    
    useEffect(() => {
        // axios.get(${`FIXTURES_URL+chosen team prop`},{ headers: API_REQUEST_HEADERS }) // how it may look when I want to render more than 1 team
        axios.get(`${FIXTURES_URL}&team=${team}&next=3`,{ headers: API_REQUEST_HEADERS })
            .then(res => {
                setUpcomingGames(res.data.response)
            })
            .catch(err => console.error(err))
    },[])

    return(
        <div className="single-upcoming-game-container" >
            {upcomingGames && upcomingGames.map((game, idx) => {
            return (
                <div className='single-match-container'>
                    <li key={idx}> {game.teams.home.name} (Home) vs {game.teams.away.name} (Away)</li>
                </div>
                
            )
                
        })}
        </div>
        
    )
    
}