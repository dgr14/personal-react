import React from 'react'
import TeamList from './Teams/TeamList'
import MatchList from './Matches/MatchList';
import StandingList from './Standings/StandingList'
import TeamProvider from './Teams/TeamProvider'
import MatchProvider from './Matches/MatchProvider'
import StandingProvider from './Standings/StandingProvider'

import Styles from './View.module.css'


function View() {
    return (
        <div className={Styles.viewWrapper}>
        <TeamProvider>
            <TeamList />
        </TeamProvider>
        
        <StandingProvider>
            <StandingList />
        </StandingProvider>
        
        <MatchProvider>
            <MatchList />
        </MatchProvider>
        </div>
    )
}

export default View
