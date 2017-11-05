import Im from '/imports/models/Im.js';

Meteor.publish('Im.all', function() {
  return Im.find({}, {
    fields: Lists.publicFields
  });
});