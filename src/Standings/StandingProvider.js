import React, { Component, createContext } from 'react'
import axios from 'axios';
const {Consumer, Provider} = createContext()

export default class StandingProvider extends Component {
    constructor() {
        super()
        this.state = {
            obj: {
                standings:[{
                    table:[]
                }]
            }
        }
    }
        componentDidMount() {
            axios.get("https://api.football-data.org/v2/competitions/2021/standings?season=2019", { headers: { "X-Auth-Token": "d1ec439606554a1bb6ec75105c61e87c"}})
            .then(response => this.setState({ obj: response.data}))
        }
    render() {
        const value = {...this.state}
        return (
           <Provider value = {value}>{this.props.children}</Provider>
        )
    }
}

export const withStandingsProvider = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)