import React, { Component } from 'react';
import R from 'ramda';
 
export default class CoworkLanding extends Component {
 
  // http://tympanus.net/Development/MinimalForm
  // +
  // http://mds.is/float-label-pattern/
  // +
  // http://leaverou.github.io/stretchy/?mc_cid=d0afee1116&mc_eid=5db727f525

  constructor(props) {
    super(props);

    // getRandom :: Array -> Array node
    this.getRandom = R.curry(function(arr){ return arr[ Math.floor( Math.random() * arr.length ) ] });

    // somethingElse :: String -> String
    this.styleClickableArea = R.curry(function(input){ return {__html: input} }); 

    // renderClickableArea :: Array -> String
    this.renderClickableArea = R.compose(this.styleClickableArea, this.getRandom)

  }

  render() {

    return (
      <form style={styles.base}>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.iAm})}>
          I am <span style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.iAm})} dangerouslySetInnerHTML={this.renderClickableArea(['a graphic designer', 'Simone'])} />,
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.workingOn})}>
          I <span style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.workingOn})} dangerouslySetInnerHTML={this.renderClickableArea(['work on a new, secret mobile application', 'am reading about quantum fysics'])} />
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.lookingFor})}>
          &amp; I <span style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.lookingFor})} dangerouslySetInnerHTML={this.renderClickableArea(['like to get in contact with a web developer', 'am searching for a designer that can create a visual identity for X', 'am looking for a project manager', 'like to meet people who know a lot about block chain'])} />
        </span>
      </form>
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
    display: 'inline-block',
    marginBottom: '25px'
  },
  clickableArea: {
    display: 'inline',
    color: '#fff',
    borderRadius: '5px',
    padding: '0 5px'
  }
}
