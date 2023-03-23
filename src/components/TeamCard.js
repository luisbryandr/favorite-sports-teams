import UpcomingGames from './UpcomingGames';
import styled from 'styled-components';

// import NewsHeadlines from './NewsHeadlines';
// import MiscInfo from './MiscInfo';

// import teamLogo from '../assets/Images/teamLogo.png'

 const TeamCard = ({ team }) => {
    // const { teamNumber } = props.team

    return (
        <CardWrapper>
             {/* <img src={teamLogo} alt="sample team's logo" /> */}
             <Logo src={`https://media.api-sports.io/football/teams/${team}.png`} alt="team logo" />
                        <h3>Upcoming Games:</h3>
             <UpcomingGames teamNumber={team}/>

            {/* <NewsHeadlines />
                <MiscInfo /> */}
        </CardWrapper>
           
        
        
    )
}

const CardWrapper = styled.div`
    {
        border: 1px solid #e1e1e1;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        max-width: 500px;

        @media only screen and (max-width: 768px) {
            flex-direction: column;
    }

`

const Logo = styled.img`
    {
        border-radius: 10px;
        max-height: 30%;
        max-width: 30%;
    }
`


export default TeamCard;