import React from 'react'
import MatchList from './MatchList';
import Styles from './MatchCard.module.css';

function MatchCard(props) {
    const {score} =props
    const {homeTeam} =props
    const {awayTeam} =props
    const {utcDate} =props
    return (
        <div className={Styles.indivBox}>
            <h4 className={Styles.homeTeam}>Home: {homeTeam.name}</h4>
            <p className={Styles.vs}>vs.</p>
            <h4 className={Styles.awayTeam}>Away: {awayTeam.name}</h4>
            <p className={Styles.winner}>Winner: {score.winner}</p>
            {/* <pclassName={Styles.winner}</p> */}
            
            {/* <MatchList/> */}
        </div>
    )
}

export default MatchCard