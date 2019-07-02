import React, { Component } from 'react';
import TeamCard from './TeamCard'
import {withTeamProvider} from './TeamProvider'
import Styles from './TeamList.module.css'

function TeamList(props) {
    // console.log(props)
        const mappedTeams = props.teams.map((team, i) => <TeamCard key={i} backgroundColor = {team.clubColors.split(' / ')[0]}
        borderColor = {team.clubColors.split(' / ')[1]} {...team}/>)
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.teamTitleHolder}>
                <h5>Teams</h5>
            </div>
            <div className={Styles.teamMap}>
                {mappedTeams}
            </div>
        </div>
    )
}

export default withTeamProvider(TeamList)

// sneak in some fun things about how liverpool is the best.