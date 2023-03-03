import axios from 'axios';
import React, { useState, useEffect } from 'react';


//will need to move to a separate file
const FIXTURES_URL = ' https://v3.football.api-sports.io/fixtures?season=2022&team=529&next=3'
const API_REQUEST_HEADERS = {
    'X-RapidAPI-Host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '953200a1e98efd99b0adee31b6175653'
};

export default function UpcomingGames() {
    const [upcomingGames, setUpcomingGames] = useState([]);

    useEffect(() => {
        axios.get(FIXTURES_URL, { headers: API_REQUEST_HEADERS })
            .then(res => {
                setUpcomingGames(res.data.response)
            })
            .catch(err => console.error(err))
    }, [])


    return (
        <div>
            <h3>Upcoming Games:</h3>
            {upcomingGames && upcomingGames.map((game, idx) => {
                return <p key={idx}> {game.teams.home.name} vs {game.teams.away.name}</p>;
            })}
        </div>
    )

}