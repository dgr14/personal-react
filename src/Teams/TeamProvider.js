import axios from 'axios';
import React, { Component, createContext } from 'react'
const {Consumer, Provider} = createContext()

export default class TeamProvider extends Component {
    constructor() {
        super()
        this.state = {
            teams: []
        }
    }
    componentDidMount() {
        axios.get("https://api.football-data.org/v2/competitions/PL/teams", { headers: { "X-Auth-Token": "d1ec439606554a1bb6ec75105c61e87c" } })
            .then(response => this.setState({ teams: response.data.teams }))
    }
    render() {
        const value = {...this.state}
        return (
            <Provider value = {value}>{this.props.children}</Provider>
        )
    }
}

export const withTeamProvider = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)
