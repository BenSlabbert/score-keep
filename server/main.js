import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
    class Person {
        constructor(name = 'Anon', age = 0) {
            this.name = name;
            this.age = age;
        }

        getGreeting() {
            return `Hi! I am ${this.name}.`;
        }

        getPersonDescription() {
            return `${this.name} is ${this.age} years old.`;
        }
    }

    class Employee extends Person {

        constructor(name, age, title) {
            super(name, age)
            this.title = title;
        }

        getGreeting() {
            if (this.title) {
                return `Hi, I am ${this.name} I work as a ${this.title}`;
            } else {
                return super.getGreeting();
            }
        }

        hasJob() {
            return !!this.title;
        }
    }

    // programmer class
    // extend from person
    // name, age, preferredLanguage has default 'aasembly'
    // override getGreeting 
        // hi i am {name} I am a {language} developer

    class Programmer extends Person {

        constructor (name, age, preferredLanguage = 'Assembly'){
            super(name, age);
            this.preferredLanguage = preferredLanguage;
        }

        getGreeting(){
            return `Hi! I am ${this.name}, I am a ${this.preferredLanguage} developer.`;
        }
    }

    let me = new Programmer('Ben', 25, 'Java');
    console.log(me.getGreeting());
});
