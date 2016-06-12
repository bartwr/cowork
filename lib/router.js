import React, { Component } from 'react';

/**
 *  App
 */
import App from '../imports/ui/App.jsx';

/**
 *  CoworkLanding
 */
import CoworkLanding from '../imports/ui/cowork-landing/cowork-landing.jsx';

FlowRouter.route('/', {
  action(params) {
    ReactLayout.render(App, {content: <CoworkLanding />});
  }
});
