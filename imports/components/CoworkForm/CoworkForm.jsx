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
      iAmExamples: ['a graphic designer', 'Simone', 'Joost', 'Vera'],
      workingOnExamples: ['work on a secret project', 'read about game of life'],
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
          workingOnExamples: ['work on ...'],
          lookingForExamples: ['\'m looking for ...']
        })
      else {
        self.forceUpdate();
        setTimeout(() => poke(countTimes + 1), 1200);
      }
    }
    setTimeout(() => poke(0), 1200);

  }

  setValue = name => {

    // Set prompt title
    if(name == 'iAm') msg = 'i am ...'
    else if(name == 'workingOn') msg = 'i work on ...'
    else if(name == 'lookingFor') msg = '& i\'m looking for ...'

    // Ask the user for the value
    this.state[name] = prompt(msg, '')
    this.forceUpdate();

    // Automatically show next popup after filling in
    if(name == 'iAm')
      this.setValue('workingOn')

    else if(name == 'workingOn')
      this.setValue('lookingFor')

  }

  render() {

    random = Math.floor(Math.random() * 3)
    chosenOne = ['iAm', 'workingOn', 'lookingFor'][random]

    return (
      <form style={styles.base} onSubmit={this.submitForm.bind(this)} method="post">

        <p>
          Wat wil je delen?
        </p>

        <span style={Object.assign({}, styles.infoBlock, {color: colors.iAm})}>
          I am <span onClick={this.setValue.bind(this, 'iAm')} style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.iAm})}>{this.renderClickableArea(
            this.state.iAm ? [this.state.iAm] : (chosenOne == 'iAm' ? this.state.iAmExamples : ['...'])
          )}</span>,
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.workingOn})}>
          I <span onClick={this.setValue.bind(this, 'workingOn')} style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.workingOn})}>{this.renderClickableArea(
            this.state.workingOn ? [this.state.workingOn] : (chosenOne == 'workingOn' ? this.state.workingOnExamples : ['work on ...'])
          )}</span>
        </span>
        <span style={Object.assign({}, styles.infoBlock, {color: colors.lookingFor})}>
          &amp; I <span onClick={this.setValue.bind(this, 'lookingFor')} style={Object.assign({}, styles.clickableArea, {backgroundColor: colors.lookingFor})}>{this.renderClickableArea(
            this.state.lookingFor ? [this.state.lookingFor] : (chosenOne == 'lookingFor' ? this.state.lookingForExamples : ['\'m looking for ...'])
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
