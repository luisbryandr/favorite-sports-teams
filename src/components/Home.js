import React, { useState } from "react";
import TeamCard from "./TeamCard";
import SearchBar from "./SearchBar";

import './home.css';
import axios from "axios";

import { 
    API_REQUEST_HEADERS, 
    TEAM_SEARCH_URL 
} from '../assets/API/APICalls'


const  Home = () => {

        const [ teams, setTeams ] = useState(["529"])
        //"529","33", "85"
        //setTeams will be used by SearchBar to add teams based on name (search will reaquire call to the API to get ID of team needed for logos, fixtures, etc

        //Steps to display user saved favorite teams:
        //Use local storage first - will prob build back end later
        //check if user has logged in before (local storage user email/id given by google sign in)
        //check for a Teams array associated with user's google profile stored in local storage (will be there if user signed in and searched and added a team )
        //if both are there then load that in to state, which would trigger a call to database for those 3 as specified in team.map method below -- thinking use effect on load function doing those 3 steps in order
        //if they aren't there. display welcome message and log in button
        //display the search bar once logged in, maybe still display it and allow user to use app without saving preferences but tell them they will need to log in if they want to save team preferences
        //use app as built so far -- remember news headlines and othe info coming later
        
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
            <div id="Home">
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
