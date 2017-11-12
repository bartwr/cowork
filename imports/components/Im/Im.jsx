import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data'

import CoworkForm from '../CoworkForm/CoworkForm'

class Im extends Component {
 
  render() {
    let isEditable = true;

    return (
      <div style={styles.base}>
        <CoworkForm isEditable={isEditable} im={this.props.im} />
      </div>
    );
  }
}

var colors = {
  iAm: '#00ff00',
  workingOn: '#00f',
  lookingFor: '#f00' /*share with me */
}

var styles = {
  base: {
    borderBottom: 'solid #ccc 1px',
    paddingBottom: '25px',
    margin: '25px 0'
  },
  infoBlock: {
    display: 'block',
    marginBottom: '25px'
  },
  userValue: {
    display: 'inline',
    color: '#fff',
    borderRadius: '5px',
    padding: '0 5px'
  }
}

export default createContainer((props) => {
  return {
    im: props.im,
    userId: Meteor.userId()
  }
}, Im);
