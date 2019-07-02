import React from 'react'
import MatchCard from './MatchCard'
import {withMatchProvider} from './MatchProvider'
import Styles from './MatchList.module.css'
// import console = require('console');

function MatchList(props) {
    const mappedMatch = props.matches.map((match, i) => <MatchCard key={i} {...match} />)
    return (
        <div className={Styles.matchReturnDiv}>
            <div className={Styles.matchHolder}>
                <h5>Matches</h5>
            </div>
            <div className={Styles.mapMatch}>
                {mappedMatch}
            </div>
        </div>
    )
}

export default withMatchProvider(MatchList)
