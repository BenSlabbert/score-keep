import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {

});

// some ES6 features

let user = {
    name: 'ben',
    location: 'CT',
    age: 0
};

let person = {
    age: 24,
    // object spread operator
    ...user
};

console.log(person);

// object property shorthand
let bike = 'Scott';
let stuff = {
    bike,
    laptop: 'linux'
};

console.log(stuff);

let house = {
    bedrooms: 2,
    bathrooms: 1.5
};

let yearBuilt = 2010;

let obj = {
    ...house,
    yearBuilt,
    bedrooms: 3,
    flooring: 'carpet'

};
console.log(obj);