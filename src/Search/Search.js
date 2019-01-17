import React, { Component } from 'react'

import './Search.css'

export default class Search extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            searchBarInput: ''
        }
    }
    changeHandler = ( e ) => {
        this.setState({ searchBarInput: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>What are you looking for?</h2>
                <div className='search'>
                    <input 
                        onChange={ this.changeHandler } 
                        type="text" 
                        name='searchbar' 
                        id='searchbar' 
                        placeholder='Search Venue Type' 
                    />
                    <button onClick={ this.props.getVenues.bind(null, this.state.searchBarInput) }>Search</button>
                </div>
            </div>
        )
    }
}