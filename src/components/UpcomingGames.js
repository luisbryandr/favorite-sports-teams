import axios from 'axios';

//will need to move to a separate file
const FIXTURES_URL = 'https://v3.football.api-sports.io/fixtures?season=2022&team=529&next=3'
const API_REQUEST_HEADERS = {
    'X-RapidAPI-Host': 'v3.football.api-sports.io'
    , 'X-RapidAPI-Key': '953200a1e98efd99b0adee31b6175653'
  };
const upcomingFixtures = axios.get( FIXTURES_URL, {
    headers: API_REQUEST_HEADERS
    // params: {
    //     season: 2022,
    //     team:529,
    //     next:3
    // }
} )
    .then( res => {
     return res.data.response
    } )
    .catch(err => console.log(err))

const dummyData = [
    {
        "id":1,
        "team": 'Chelsea',
        "date": "March 3rd 2023"
    },
    {
        "id":2,
        "team": "AC Milan",
        "date": "March 10th, 2023"
    }

]

console.log(upcomingFixtures);

export default function UpcomingGames () {
    return (
        <div>
            <h3>UpcomingGames:</h3>
            {dummyData.map(details => {
                return <p>vs {details.team} on {details.date}</p>
            })}
        </div>
    )
    
}