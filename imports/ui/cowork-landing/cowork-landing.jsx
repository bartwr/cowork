import React, { Component } from 'react';
 
export default class CoworkLanding extends Component {
 
  // http://tympanus.net/Development/MinimalForm
  // +
  // http://mds.is/float-label-pattern/
  // +
  // http://leaverou.github.io/stretchy/?mc_cid=d0afee1116&mc_eid=5db727f525

  componentDidMount() {
  }

  render() {

    var colors = {
      iAm: '#00ff00',
      workingOn: '#00f',
      shareWithMe: '#f00'
    }

    return (
      <form style={styles.base}>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.iAm})}>
          I am [a graphic designer / Simone],
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.workingOn})}>
          I [work on a new, secret mobile application / am reading about quantum fysics]
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.shareWithMe})}>
          &amp; I [like to get in contact with a web developer / am searching for a designer that can create a visual identity for X / am looking for a project manager / like to meet people who know a lot about block chain]
        </span>
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
    display: 'inline-block',
    marginBottom: '25px'
  }
}
