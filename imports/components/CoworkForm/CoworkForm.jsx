import React, { Component } from 'react';
import R from 'ramda';
 
var colors = {
  iAm: '#00ff00',
  workingOn: '#00f',
  lookingFor: '#f00' /*share with me */
}

export default class CoworkLanding extends Component {
 
  // submitForm :: void -> ?
  submitForm = (e) => {
    e.preventDefault();
    this.saveForm(this.state);
    FlowRouter.go('swarm');
  }

  saveForm = (data) => Meteor.call('Im.saveMe', data);

  constructor(props) {
    super(props);

    // State
    this.state = {
      iAmExamples: ['a graphic designer', 'Simone', 'Joost'],
      workingOnExamples: ['work on a new, secret mobile application', 'am reading about quantum fysics'],
      lookingForExamples: ['like to get in contact with a web developer', 'am searching for a designer that can create a visual identity for X', 'am looking for a project manager', 'like to meet people who know a lot about block chain']
    };

    // getRandom :: Array -> Array node
    this.getRandom = R.curry(function(arr){ return arr[ Math.floor( Math.random() * arr.length ) ] });

    // somethingElse :: String -> String
    this.styleClickableArea = R.curry(function(input){ return input }); 

    // renderClickableArea :: Array -> String
    this.renderClickableArea = R.compose(this.styleClickableArea, this.getRandom)

    // Animate
    self = this;
    // Refresh random sentences x times
    poke = (countTimes) => {
      if(countTimes >= 0)
        self.setState({
          iAmExamples: ['...'],
          workingOnExamples: ['...'],
          lookingForExamples: ['...']
        })
      else {
        self.forceUpdate();
        setTimeout(() => poke(countTimes + 1), 1200);
      }
    }
    setTimeout(() => poke(0), 1200);

  }

  setValue = name => {
    if(name == 'iAm') msg = 'i am ...'
    else if(name == 'workingOn') msg = ', i ...'
    else if(name == 'lookingFor') msg = '& i ...'

    this.state[name] = prompt(msg, '')
    this.forceUpdate();
  }

  render() {

    return (
      <form style={styles.base} onSubmit={this.submitForm.bind(this)} method="post">

        <p>
          Wat wil je delen?
        </p>

        <span style={Object.assign({}, styles.infoBlock, {color: colors.iAm})}>
          I am <span onClick={this.setValue.bind(this, 'iAm')} style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.iAm})}>{this.renderClickableArea(
            this.state.iAm ? [this.state.iAm] : this.state.iAmExamples
          )}</span>,
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.workingOn})}>
          I work on <span onClick={this.setValue.bind(this, 'workingOn')} style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.workingOn})}>{this.renderClickableArea(
            this.state.workingOn ? [this.state.workingOn] : this.state.workingOnExamples
          )}</span>
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.lookingFor})}>
          &amp; I'm looking for <span onClick={this.setValue.bind(this, 'lookingFor')} style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.lookingFor})}>{this.renderClickableArea(
            this.state.lookingFor ? [this.state.lookingFor] : this.state.lookingForExamples
          )}</span>
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
