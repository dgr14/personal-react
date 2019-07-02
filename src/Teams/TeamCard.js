import React from 'react';
import Styles from './TeamCard.module.css'
import convert from '../ColorConverter'
//  Name, Crest, Address, Website, Date Founded, Venue 

    function TeamCard({name, crestUrl, address, website, founded, venue, clubColors, backgroundColor, borderColor}) {
        const primaryColor = convert(clubColors.split("/")[0].trim())
        const secondaryColor = convert(clubColors.split('/')[1])
        // console.log(primaryColor)
    return (
        <div className={Styles.teamCardWrapper}>
            <div style={
                {
                    backgroundImage: `linear-gradient(${primaryColor}, ${secondaryColor})`,
                    borderColor
                }
            } className={Styles.titleImageHolder}>
                <h3 className={Styles.clubName}>{name}</h3>
                <div className={Styles.spacerDiv}></div>
                <img className={Styles.teamBadge} src={crestUrl}/>
            </div>
            <ul>
                <li>{venue}</li>
                <li>{founded}</li>
                {/* change the link color to the primary color */}
                <li> <a href={website} target="_blank">{website}</a> </li>
                <li>{address}</li>
            </ul>
        </div>
    )
}
// const mainColor = clubColors.
// const secColor = clubColors.slice()
export default TeamCard;
