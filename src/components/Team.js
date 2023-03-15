import UpcomingGames from './UpcomingGames';
// import NewsHeadlines from './NewsHeadlines';
// import MiscInfo from './MiscInfo';

// import teamLogo from '../assets/Images/teamLogo.png'

export default function Team () {
    const teamNumbers = [ "529", "33", "85"]

    return (
        <div className='team-container' >
            {/* <img src={teamLogo} alt="sample team's logo" /> */}
            <UpcomingGames teamNumber={teamNumbers}/>

            {/* <NewsHeadlines />
            <MiscInfo /> */}
        </div>
        
    )
}


