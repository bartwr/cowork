import Im from '/imports/models/Im.js'

Meteor.methods({

  // saveCustomersSubscription: (obj) ->
  //   return if not Meteor.userId()?
  //   Customers.update({ customersId: obj.customersId }, {
  //     $set:
  //       'abonnement1': if obj.abbos[0] then 1 else 0
  //       'abonnement2': if obj.abbos[1] then 1 else 0
  //       'abonnement3': if obj.abbos[2] then 1 else 0
  //       'abonnement4': if obj.abbos[3] then 1 else 0
  //       'abonnement5': if obj.abbos[4] then 1 else 0
  //       'abonnement6': if obj.abbos[5] then 1 else 0
  //   })
  //   return Customers.sync.syncMongoDBtoMySQL({
  //       customersId: obj.customersId
  //   })

  'Im.saveMe'(data) {
    // if(! Meteor.userId()) return;

    return Im.insert({
      userId: 0,
      locationId: 0,
      dateCreated: new Date(),
      iAm: data.iAm,
      workingOn: data.workingOn,
      lookingFor: data.lookingFor,
    })
  }

})
