import React, { Component } from 'react';
import R from 'ramda';
import CoworkFormComponent from '/imports/components/CoworkForm/CoworkForm.jsx';

export default class CoworkForm extends Component {
 
  // constructor
  constructor(props) { super(props) }

  // onSubmit :: void -> ?
  onSubmit() { console.log('onSubmit') }

  render() {

    return (
      <CoworkFormComponent onSubmit={this.onSubmit.bind(this)} />
    );
  }
}
