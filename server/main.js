import { Meteor } from 'meteor/meteor'
import { Players } from './../imports/api/players';

Meteor.startup(function () {
    // Players.insert({
    //     name: 'Matt',
    //     score: 3
    // });

    // let square = function (x) {
    //     return x * x;
    // };

    // simplified expression function ... lambdas :D
    let square = (x) => x * x;

    console.log(square(10));

});
