import React, { Component } from 'react';
import R from 'ramda';
import ContentEditable from 'react-contenteditable';

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
      // user values
      iAm: '...',
      workingOn: 'am working on ...',
      lookingFor: '\'m looking for ...',
      // examples
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
        setTimeout(() => poke(countTimes + 1), 1500);
      }
    }
    setTimeout(() => poke(0), 1500);

  }

  // handleChange :: String, Event -> StateChange
  handleChange = (name, e) => { this.state[name] = e.target.value }

  // renderInput :: String, Object { styles, extra }
  renderInput = (name, extra) => {
    return <ContentEditable
            html={this.state[name]}
            disabled={false}
            style={Object.assign({}, extra.styles.clickableArea, {backgroundColor: extra.colors[name]})}
            onChange={this.handleChange.bind(this, name)}
          />
  }

  render() {
    return (
      <form style={styles.base} onSubmit={this.submitForm.bind(this)} method="post">

        <span style={Object.assign({}, styles.infoBlock, {color: colors.iAm})}>
          I am {this.renderInput('iAm', {styles, colors})},
        </span>

        <span style={Object.assign({}, styles.infoBlock, {color: colors.workingOn})}>
          I {this.renderInput('workingOn', {styles, colors})}
        </span>

        <span style={Object.assign({}, styles.infoBlock, {color: colors.lookingFor})}>
          & I {this.renderInput('lookingFor', {styles, colors})}
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
  paragraph: {
    fontSize: '16px',
    lineHeight: '20px'
  },
  infoBlock: {
    display: 'block',
    marginBottom: '25px'
  },
  clickableArea: {
    cursor: 'pointer',
    display: 'inline',
    color: '#fff',
    padding: '0 5px',
    outline: 'none',
  }
}
