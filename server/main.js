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
    // let square = (x) => x * x;
    // console.log(square(10));

    // let user = {
    //     name: 'ben',
    //     sayHi() {
    //         setTimeout(() => {
    //             console.log(this.name);
    //         }, 1000);
    //     }
    // };

    // user.sayHi();

    let adder = (x) => x + 1;

    let numbers = [9, 99, 4, 56];
    let newNumbers = numbers.map((number) => {
        return number + 1;
    });

    console.log(newNumbers);

    newNumbers = numbers.map((number) => number + 1);

    console.log(newNumbers);

    newNumbers = numbers.map(adder);

    console.log(newNumbers);

});
