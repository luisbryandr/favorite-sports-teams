import React, { useState } from "react";
import TeamCard from "./TeamCard";
import Header from "./Header";
// import SearchBar from "./SearchBar";

import './Home.css';

const  Home = () => {

        const [ teams, setTeams ] = useState(["529","33", "85"])

        //setTeams will be used by SearchBar to add teams based on name (search will reaquire call to the API to get ID of team needed for logos, fixtures, etc


        return ( 
            <div className="home">
                <Header />
                <div className="home-background-image">
                    <div            className="teams_container">
                        {/* SearchBar component would go here with  */}
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