import React from 'react';
import UpcomingGame from './UpcomingGame';
import './upcomingGames.css'

export default function UpcomingGames(props) {
       const { teamNumber } = props

    return (
        <div className='upcoming-games-container'>
            {teamNumber.map((team,index) => {
                return ( 
                    <div key={index}>
                        <img src={`https://media.api-sports.io/football/teams/${team}.png`} alt="team logo" />
                        <h3>Upcoming Games:</h3>
                        <UpcomingGame team={team}/>
                    </div>
                )
                
            })}
            

        </div>
    )

}

//right now (3/7/23 the app is rendering the game of a specific team (one that I already picked and knew its team number to put in the search query when requesting from API))
//later it will need to be based on the team they choose 
//I think that would mean that choosing Team and its upcoming games should be its own Component, either a higher level up or lower level down thats what I'm unsure of
//If I do a higher level up Say (Team.js which renders upcoming games then I can prop drill the search query into upcoming games component and search for the  teams logo and upcoming games that way) -- there would be a need to separate the teams already favorite and add functionality to choose new teams, maybe based on a form an dropdown? choices fed by api
//for now i will focus on this working for chosen teams already (hardcoded team numbers first then prop drilled from higher up component`)
//
