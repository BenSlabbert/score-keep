import { Meteor } from 'meteor/meteor'
import { Players } from './../imports/api/players';

Meteor.startup(function () {
    Players.insert({
        name: 'Matt',
        score: 3
    });

    console.log(Players.find().fetch());
});
