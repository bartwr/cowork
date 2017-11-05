import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import R from 'ramda';

// Import models
import Im from '/imports/models/Im.js';

// Import components
import ImComponent from '/imports/components/Im/Im.jsx';

class CoworkSwarm extends Component {
 
  renderIm = im => <ImComponent key={im._id} im={im} />

  render() {
    return (
      <div style={styles.base}>
        Welcome to the Swarm!
        {R.map(this.renderIm, this.props.allIm)}
      </div>
    );
  }
}

export default createContainer((props) => {
  Meteor.subscribe('Im.all');
  return {
    allIm: Im.find({}, {limit: 25, sort: { dateCreated: -1 } }).fetch()
  }
}, CoworkSwarm);

var styles = {
  base: {}
}
