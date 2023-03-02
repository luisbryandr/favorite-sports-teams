const dummyData = [
    {
        "id":1,
        "team": 'Chelsea',
        "date": "March 3rd 2023"
    }
]


export default function UpcomingGames () {
    return (
        <div>
            <h3>The next upcoming matches are below:</h3>
            <p>Game 1: {dummyData[0].team}  on {dummyData[0].date}</p>
            <p>Game 2 vs AC Milan</p>
            <p>Game 3 vs Porto</p>
        </div>
    )
    
}