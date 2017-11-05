import React, { Component } from 'react';
import { mount } from 'react-mounter';

/**
 *  App
 */
import App from '/imports/App.jsx';

/**
 *  CoworkLanding
 */
import CoworkLanding from '/imports/components/CoworkLanding/CoworkLanding.jsx';
import CoworkSwarm from '/imports/components/CoworkSwarm/CoworkSwarm.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(App, {
      content: <CoworkLanding />
    })
  }
});

FlowRouter.route('/swarm', {
  name: 'swarm',
  action() {
    mount(App, {
      content: <CoworkSwarm />
    })
  }
});
