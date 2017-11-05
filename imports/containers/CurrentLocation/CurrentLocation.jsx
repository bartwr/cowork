import React, { Component } from 'react';

// Import templates
import CurrentLocationComponent from '/imports/components/CurrentLocation/CurrentLocation.jsx';

export default class CurrentLocation extends Component {
 
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <CurrentLocationComponent />
    );
  }
}
