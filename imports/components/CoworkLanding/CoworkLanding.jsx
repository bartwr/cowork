import React, { Component } from 'react';

// Import templates
import CurrentLocation from '/imports/containers/CurrentLocation/CurrentLocation.jsx';
import CoworkForm from '/imports/containers/CoworkForm/CoworkForm.jsx';

export default class CoworkLanding extends Component {
 
  constructor(props) {
    super(props);

    this.state = { location: {} }
  }

  setLocation(location) {
    this.state.location = location;
  }

  render() {

    // console.log(this.state.location)
    // let locationBasedContent = this.state.location.length > 0 ? [<CoworkForm />] : null

    // return (
    //   <div style={styles.base}>
    //     <CurrentLocation setLocation={this.setLocation.bind(this)} />
    //     {locationBasedContent}
    //   </div>
    // );

    return (
      <div style={styles.base}>
        <CoworkForm />
      </div>
    );
  }
}

var styles = {
  base: {
  },
}
