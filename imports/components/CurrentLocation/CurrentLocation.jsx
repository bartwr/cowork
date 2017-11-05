import React, { Component } from 'react';
import R from 'ramda';

// Import templates
// ..

export default class CurrentLocation extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      venue: {}
    }
  }

  //+ setGeoLocation :: Object -> void
  setGeoLocation (position) {
    this.setState({
      location: { latitude: position.coords.latitude, longitude: position.coords.longitude }
    });
    this.getVenue();
  }

  //+ showGeoError :: void -> void
  showGeoError () {
    alert("Unable to retrieve your location");
  }

  //+ setGeoLocation :: void -> void
  getGeoLocation () {
    if (!navigator.geolocation){
      return this.showGeoError();
    }
    return navigator.geolocation.getCurrentPosition(
      this.setGeoLocation.bind(this), this.showGeoError, {maximumAge: 5 * 60 * 1000}
    );
  }

  //+ getVenue :: void -> void
  getVenue () {
    var self = this;
    var venue = fetch(
      'https://api.foursquare.com/v2/venues/search?client_id=CM41IS5S2PVRW3YURJA0FGPVZZEF2GLTG3AMO4MPUS1WHYCY&client_secret=1AWZTGWOPWHNSJOVZJJSUEZOEKGPWAD2JNY43FBBJO2KVRVB&v=20130815&ll='+this.state.location.latitude+','+this.state.location.longitude,
        { method: 'get' }
    ).then(function(response) {
      response.json().then(function(data){
        console.log(data);
        self.setState({ venue: data.response.venues[0] });
      });
    }).catch(function(err) {
      console.log(err);
    });
  }

  render() {
    return (
      <div style={s.base}>
        <h1 style={Object.assign({display: 'none'}, s.locationName, this.state.location.latitude && {display: 'block'})}>
          {this.state.venue.name}
        </h1>
        <div style={Object.assign({display: 'block'}, this.state.location.latitude && {display: 'none'})}>
          Hi there! Where are you?
          <button onClick={this.getGeoLocation.bind(this)}>I'm here</button>
        </div>
      </div>
    );
  }
}

var s = {
  base: {
    backgroundColor: '#ccc',
    padding: '5px',
    marginBottom: '20px',
    color: '#fff',
  },
  locationName: {
    margin: 0,
    padding: 0
  }
}
