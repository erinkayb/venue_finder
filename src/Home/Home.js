import React, { Component } from 'react'

import './Home.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderPubs: 'bar',
            renderFood: 'food',
            renderTheatre: 'theater',
            renderMuseums: 'museums'
        }
    }
   
    render() {
        return (
            <div className="container">
                <div className="box-container">
                    <button className="btn" onClick={this.props.getVenues.bind(null, this.state.renderMuseums)}>Museums</button>
                </div>
                <div className="box-container">
                    <button className="btn" onClick={this.props.getVenues.bind(null, this.state.renderFood)}>Food</button>
                </div>
                <div className="box-container">
                    <button className="btn" onClick={this.props.getVenues.bind(null, this.state.renderTheatre)}>Theater</button>
                </div>
                <div className="box-container">
                    <button className="btn" onClick={this.props.getVenues.bind(null, this.state.renderPubs)}>Pubs</button>
                </div>
            </div>
        )
    }
}
