import React, { Component } from 'react';
 
// App component - represents the whole app
export default class App extends Component {

  constructor() {
    super();
    if (document.location.host == 'localhost:3000') return;
    if (document.location.host.indexOf('www') != -1) location = 'https://cowork.nu';
    if (document.location.href.indexOf('http://') != -1) location = 'https://cowork.nu';
  }
 
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    );
  }
}
