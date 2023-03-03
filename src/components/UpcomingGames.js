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


export default function UpcomingGames () {
    return (
        <div>
            <h3>The next upcoming matches are below:</h3>
            {dummyData.map(details => {
                return <p>vs {details.team} on {details.date}</p>
            })}
        </div>
    )
    
}