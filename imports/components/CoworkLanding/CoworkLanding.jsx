import React, { Component } from 'react';

// Import templates
import CoworkForm from '/imports/containers/CoworkForm/CoworkForm.jsx';

export default class CoworkLanding extends Component {
 
  constructor(props) {
    super(props);
  }

  render() {

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
