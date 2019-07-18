import React from 'react'
import StandingCard from './StandingCard'
import {withStandingsProvider} from './StandingProvider'
import Styles from './StandingList.module.css'

function StandingList(props) {
    const mappedStandings = props.obj.standings[0].table.map((standings, i) => <StandingCard key = {i} {...standings} />)
    return (
        <div className={Styles.standingDiv}>
            <h5 className={Styles.standingsHeader}>Standings</h5>
            <div className={Styles.standingsMap}> 
                <table className={Styles.headerTable}>
                    <thead>
                        <tr className={Styles.headerTable}>
                            <th className={Styles.position}>Po.</th>
                            <th className={Styles.teamNameDisplay}>Club</th>
                            <th className={Styles.playedGames}>Played</th>
                            <th className={Styles.won}>Won</th>
                            <th className={Styles.draw}>Draw</th>
                            <th className={Styles.lost}>Lost</th>
                            <th className={Styles.goalsFor}>GF</th>
                            <th className={Styles.goalsAgainst}>GA</th>
                            <th className={Styles.goalDifference}>GD</th>
                            <th className={Styles.points}>Points</th>
                            </tr>
                        </thead>
                    <tbody>
                        {mappedStandings}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default withStandingsProvider(StandingList)