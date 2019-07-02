import React from 'react';
import Styles from './StandingCard.module.css'
// lastUpdated, startDate, endDate, currentMatchday, winner, 
// in standings array: position, team.name, team.crestUrl, playedGames, won, lost, points, goalsFor, goalsAgainst, goalDifference


function StandingCard({position, team, crestUrl, playedGames, won, draw,  lost, points, goalsFor, goalsAgainst, goalDifference }) {
    return (
                <tr className={Styles.cardReturn}>
                    <td className={Styles.position}> {position} </td>
                    <td className={Styles.teamNameDisplay}> {team.name} </td>
                    <td className={Styles.playedGames}> {playedGames} </td>
                    <td className={Styles.won}> {won} </td>
                    <td className={Styles.draw}> {draw} </td>
                    <td className={Styles.lost}> {lost} </td>
                    <td className={Styles.goalsFor}> {goalsFor} </td>
                    <td className={Styles.goalsAgainst}> {goalsAgainst} </td>
                    <td className={Styles.goalDifference}> {goalDifference} </td>
                    <td className={Styles.points}> {points} </td>
                </tr>
        
        )
    }

export default StandingCard;
