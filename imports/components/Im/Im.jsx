import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data'

class Im extends Component {
 
  render() {
    return (
      <div style={styles.base}>

        <span style={Object.assign({}, styles.infoBlock, {color: colors.iAm})}>
          I am <span style={Object.assign({}, styles.userValue, {backgroundColor: colors.iAm})}>{this.props.im.iAm}</span>,
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.workingOn})}>
          I <span style={Object.assign({}, styles.userValue, {backgroundColor: colors.workingOn})}>{this.props.im.workingOn}</span>
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.lookingFor})}>
          &amp; I <span style={Object.assign({}, styles.userValue, {backgroundColor: colors.lookingFor})}>{this.props.im.lookingFor}</span>
        </span>

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
    fontSize: '1.75em',
    lineHeight: '1.5em',
    textTransform: 'lowercase'
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
    im: props.im
  }
}, Im);
