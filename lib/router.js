import React from 'react';
import {mount} from 'react-mounter';

/**
 *  App
 */
import App from '../imports/ui/App.jsx';

/**
 *  ComponentOne
 */
import ComponentOne from '../imports/ui/componentOne/componentOne.jsx';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: (<ComponentOne />)
    });
  }
});
