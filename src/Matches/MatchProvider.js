import React, { Component } from 'react';
import axios from 'axios';
const {Consumer, Provider} = React.createContext()

export default class MatchProvider extends Component {
    constructor() {
        super()
        this.state = {
            matches: []
        }
    }
    // all matches for 2018-2019 premier league season
    componentDidMount() {
       this.getRecentMatches()
    }

    getAllMatches = () => {
        axios.get("https://api.football-data.org/v2/competitions/2021/matches", { headers: { "X-Auth-Token": "d1ec439606554a1bb6ec75105c61e87c"}})
        .then(response => this.setState({ matches: response.data.matches}))
    }



    getRecentMatches = () => {
        const today = new Date()
        const aWeekAgo = new Date()
        aWeekAgo.setDate(today.getDate() - 6)
        const from = (aWeekAgo.toLocaleString().slice(0, 9).split("/").reverse().join("-"))
        const to = (today.toLocaleString().slice(0, 9).split("/").reverse().join("-"))
        console.log(from)
        console.log(to)
        axios.get(`https://api.football-data.org/v2/competitions/2021/matches?dateFrom=${from}&dateTo=${to}&season=2019`, { headers: { "X-Auth-Token": "d1ec439606554a1bb6ec75105c61e87c"}})
        .then(res => console.log(res))
        .catch(err => {
            if(err){ 
                this.getAllMatches()
            }
        })
    }


    render() {
       
        return (
            <Provider value={this.state}>{this.props.children}</Provider>
        )
    }
}

export const withMatchProvider = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)
