import React, { Component } from 'react';

/**
 *  App
 */
import App from '/imports/App.jsx';

/**
 *  CoworkLanding
 */
import CoworkLanding from '/imports/components/CoworkLanding/CoworkLanding.jsx';

FlowRouter.route('/', {
  action(params) {
    ReactLayout.render(App, {content: <CoworkLanding />});
  }
});
