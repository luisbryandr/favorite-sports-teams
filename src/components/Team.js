import UpcomingGames from './UpcomingGames';
import NewsHeadlines from './NewsHeadlines';
import MiscInfo from './MiscInfo';

import teamLogo from '../assets/Images/teamLogo.png'

export default function Team () {
    return (
        <div className='team-container'>
            {/* <img src={teamLogo} alt="sample team's logo" /> */}
            <UpcomingGames />
            <NewsHeadlines />
            <MiscInfo />
        </div>
        
    )
}


