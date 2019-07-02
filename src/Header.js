import React from 'react'
import Styles from "./Header.module.css"

function Header() {
    return (
        <div className={Styles.headerReturnDiv}>
            <img src="https://www.premierleague.com/resources/prod/bf75465-492/i/elements/premier-league-logo-header.png"></img>
            <h1>Premier League</h1>
        </div>
    )
}

export default Header