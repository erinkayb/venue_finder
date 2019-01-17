import React, { Component } from "react"
import "./App.css"
import axios from 'axios'

import Header from './Header/Header'
import Search from './Search/Search'
import Home from './Home/Home'

class App extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      coordinates: "",
      venues: []
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(res => {
      this.setState({
        coordinates: res.coords.latitude + "," + res.coords.longitude
      }, () => {
        this.getVenues( 'trending' )
      })
    })
  }

  getVenues = ( query ) => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const params = {
      client_id: 'VXGRJTALAWZ0MXXPFNBMCHYLWM2W1ECMCS5FE02TCYXL4LHC',
      client_secret: 'HQHQDJL3MELHYTD044ILQQRE5W3NPL41Y11TOTFYJURSCESL',
      ll: this.state.coordinates,
      query: query,
      v: '20180323',
      radius: 10000,
      limit: 10
    }
    axios.get( endPoint + new URLSearchParams( params ) ).then( res => {
      this.setState({ venues: res.data.response.groups[0].items })
      console.log(res.data.response.groups[0].items)
    })
  }

  render() {
    return <div className="App">
        <Header />
        <Search getVenues={this.getVenues} />
        <Home getVenues={this.getVenues} />
        <div className="resultsComp">
          <ul className="ulApp">
            {this.state.venues.map(venue => {
            return <ul className="liApp" key={venue.venue.name}> <li className="venue-name">{venue.venue.name}</li><li>Address: {venue.venue.location.address ? venue.venue.location.address: 'not found'}, {venue.venue.location.city}</li>
                   </ul>
            })}
          </ul>
        </div>
      </div>
  }
}

export default App
