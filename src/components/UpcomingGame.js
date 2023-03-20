import React, { useState, useEffect } from "react";
import axios from 'axios';



//will need to move to a separate file

//team=529&next=3
const FIXTURES_URL = 'https://v3.football.api-sports.io/fixtures?season=2022&' 
const API_REQUEST_HEADERS = {
            'X-RapidAPI-Host': 'v3.football.api-sports.io',
            'x-rapidapi-key': '953200a1e98efd99b0adee31b6175653'
        };

// const timestampStr = "2023-03-19T14:00:00+00:00";

        
        console.log(formattedTime); // Output: "03/19/2023, 10:00:00 AM"
        

export default function UpcomingGame (props) {
    

    const [upcomingGames, setUpcomingGames] = useState([]);
    
    useEffect(() => {
        // axios.get(${`FIXTURES_URL+chosen team prop`},{ headers: API_REQUEST_HEADERS }) // how it may look when I want to render more than 1 team
        axios.get(`${FIXTURES_URL}&team=${props.teamNumber}&next=3`,{ headers: API_REQUEST_HEADERS })
            .then(res => {
                setUpcomingGames(res.data.response)
            })
            .catch(err => console.error(err))
    },[])

    
        const options = {
          timeZone: 'America/New_York',
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        };
        

    return(
        <div className="single-upcoming-game-container" >
            {upcomingGames && upcomingGames.map((game, idx) => {
                const timestamp = new Date(game.fixture.date);
                const formattedTime = timestamp.toLocaleString('en-US', options);
                console.log(formattedTime);
            return (
                    <li key={idx}> {game.teams.home.name} (Home) vs {game.teams.away.name} (Away) on 
                        {formattedTime}</li>
            )
                
        })}
        </div>
        
    )
    
}

