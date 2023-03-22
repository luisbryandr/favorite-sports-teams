import React, { useState } from "react";
import TeamCard from "./TeamCard";
import SearchBar from "./SearchBar";

import './Home.css';
import axios from "axios";

import { 
    API_REQUEST_HEADERS, 
    TEAM_SEARCH_URL 
} from '../assets/API/APICalls'


const  Home = () => {

        const [ teams, setTeams ] = useState(["529","33", "85"])

        //setTeams will be used by SearchBar to add teams based on name (search will reaquire call to the API to get ID of team needed for logos, fixtures, etc
        const onAddTeam = (teamName) => {
                axios.get(`${TEAM_SEARCH_URL}${teamName}`, {headers: API_REQUEST_HEADERS })
                .then(res => {
                    console.log(res.data.response[0].team)
                    setTeams([...teams, String(res.data.response[0].team.id)])
                })
                .catch(err => {
                    console.error(err)
                })
            }

        return ( 
            <div id="Main">
                <div className="home-background-image">
                   <SearchBar onAddTeam={onAddTeam}/>
                    <div className="teams_container">
                        {teams.map((team,index) => {
                        return ( 
                            <TeamCard key={index} team={team} />
                            ) 
                        })} 
                    </div>

                </div>
                

            </div>
            
                
        )
}

export default Home;

// const dummyData = {
//     {
//         logo:"",
//         home_team: "Barcelona",
//         away_team: "Real Madrid",
//         date: "April 1st at 3 PM"
//     }
    
// }