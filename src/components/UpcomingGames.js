import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import UpcomingGame from './UpcomingGame';
import styled from 'styled-components';
// import './upcomingGames.css'

const FIXTURES_URL = 'https://v3.football.api-sports.io/fixtures?season=2022&' 
    const API_REQUEST_HEADERS = {
            'X-RapidAPI-Host': 'v3.football.api-sports.io',
            'x-rapidapi-key': '953200a1e98efd99b0adee31b6175653'
        };

export default function UpcomingGames({ teamNumber }) {
    //    const { teamNumber } = props.teamNumber

    const [upcomingGames, setUpcomingGames] = useState([]);
    
    useEffect(() => {
        // axios.get(${`FIXTURES_URL+chosen team prop`},{ headers: API_REQUEST_HEADERS }) // how it may look when I want to render more than 1 team
        axios.get(`${FIXTURES_URL}&team=${teamNumber}&next=3`,{ headers: API_REQUEST_HEADERS })
            .then(res => {
                setUpcomingGames(res.data.response)
                console.log(res)
            })
            .catch(err => console.error(err))
    },[])

    return (
        <UpcomingGamesWrapper>
            {upcomingGames && upcomingGames.map((game, idx) => {
            return (
                <SingleGameWrapper>
                    <li key={idx}> {game.teams.home.name} (Home) vs {game.teams.away.name} (Away)</li>
                </SingleGameWrapper>      
            )
                
            })}    
        </UpcomingGamesWrapper>   
    )
}


const UpcomingGamesWrapper = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const SingleGameWrapper = styled.div`
  {
    max-height: 50%;
    color:white;
    background-color: darkgray;
    // background: transparent;        
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    flex: 1; 
  }
`;
//right now (3/7/23 the app is rendering the game of a specific team (one that I already picked and knew its team number to put in the search query when requesting from API))
//later it will need to be based on the team they choose 
//I think that would mean that choosing Team and its upcoming games should be its own Component, either a higher level up or lower level down thats what I'm unsure of
//If I do a higher level up Say (Team.js which renders upcoming games then I can prop drill the search query into upcoming games component and search for the  teams logo and upcoming games that way) -- there would be a need to separate the teams already favorite and add functionality to choose new teams, maybe based on a form an dropdown? choices fed by api
//for now i will focus on this working for chosen teams already (hardcoded team numbers first then prop drilled from higher up component`)
//
