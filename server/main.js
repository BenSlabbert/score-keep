import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
    class Person {
        constructor(name = 'Anon', age = 0){
            this.name = name;
            this.age = age;
        }

        getGreeting() {
            return `Hi! I am ${this.name}.`; 
        }

        getPersonDescription(){
            return `${this.name} is ${this.age} years old.`;
        }
    }

    let me = new Person('Ben', 24);
    console.log(me);
    console.log(me.getGreeting());
    console.log(me.getPersonDescription());
    
    me = new Person('tim');
    console.log(me);
    console.log(me.getGreeting());
    console.log(me.getPersonDescription());
    
});
