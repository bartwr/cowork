import React, { Component } from 'react';
import R from 'ramda';
 
var colors = {
  iAm: '#00ff00',
  workingOn: '#00f',
  lookingFor: '#f00' /*share with me */
}

export default class CoworkLanding extends Component {
 
  constructor(props) {
    super(props);

    // Events
    this.onSubmit = function(e){ e.preventDefault(); this.props.onSubmit() }

    // getRandom :: Array -> Array node
    this.getRandom = R.curry(function(arr){ return arr[ Math.floor( Math.random() * arr.length ) ] });

    // somethingElse :: String -> String
    this.styleClickableArea = R.curry(function(input){ return {__html: input} }); 

    // renderClickableArea :: Array -> String
    this.renderClickableArea = R.compose(this.styleClickableArea, this.getRandom)

  }

  render() {

    return (
      <form style={styles.base} onSubmit={this.onSubmit.bind(this)}>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.iAm})}>
          I am <span style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.iAm})} dangerouslySetInnerHTML={this.renderClickableArea(['a graphic designer', 'Simone', '...'])} />,
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.workingOn})}>
          I <span style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.workingOn})} dangerouslySetInnerHTML={this.renderClickableArea(['work on a new, secret mobile application', 'am reading about quantum fysics', '...'])} />
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.lookingFor})}>
          &amp; I <span style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.lookingFor})} dangerouslySetInnerHTML={this.renderClickableArea(['like to get in contact with a web developer', 'am searching for a designer that can create a visual identity for X', 'am looking for a project manager', 'like to meet people who know a lot about block chain', '...'])} />
        </span>
        <button style={styles.button} type="submit">Next</button>
      </form>
    );
  }
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
  clickableArea: {
    cursor: 'pointer',
    display: 'inline',
    color: '#fff',
    padding: '0 5px'
  }
}
