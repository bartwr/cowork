import React, { Component } from 'react';

// Import templates
import CurrentLocation from '/imports/containers/CurrentLocation/CurrentLocation.jsx';
import CoworkForm from '/imports/components/CoworkForm/CoworkForm.jsx';

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

        <p style={styles.paragraph}>
          <b>What you'd like to share?</b> Fill in below & get to know the swarm you're in. <span style={{display: 'inline-block'}}>[<u>swarm?</u>]</span>
        </p>

        <CoworkForm isEditable={true} />

      </div>
    );
  }
}

var styles = {
  base: {
  },
}
