// let, const

//Objects

const person = {
    name: 'Mosh',
    walk() {},
    talk() {}
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'John';

//this(return reference to the current object)
const Person ={
    name: "Mosh",
    Walk() {
        console.log(this);
    }
};
Person.Walk();
const Walk = Person.Walk.bind(Person);
Walk();

//Arrow Functions

const square = number => number * number;
console.log(square(5));

const jobs = [
    { id: 1, isActive: true},
    { id: 2, isActive: true},
    { id: 3, isActive: false},
];

     //const activeJobs = jobs.filter(function(job) { return job.isActive; });
const activeJobs = jobs.filter(job => job.isActive);

//Arrow Function and this


//Array map
const colors = ['red', 'green', 'blue'];
//const items = colors.map(function(color){
    //return '<li>' + color + '</li>';
//}

//const items = colors.map( color =>'<li>' + color + '</li>');

const items = colors.mao(color => `<li>${color}</li>`);
console.log(items);

//Object Destructing

const address = {
    street: ' ',
    city: ' ',
    country: ' '
};

//const street = address.street;
//const city = address.city;
//const country = address.country;

const { street, city, country } = address;

//Spread Operator

//const first = [1, 2, 3];
//const second = [4, 5, 6];

//const combined = first.concat(second);
//const combined = [...first, ...second];

//const clone = [...first];
//console.log(first);
//console.log(clone);

const first = { name: 'Mosh'};
const second = { jpb: 'Instructor'};

const combined = { ...first, ...second, location: 'Australia'};
console.log(combined);

//Classes

class Personn {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walk');
    }
}

const personn = new Personn('Mosh');

//Inheritance
class Teacher extends Personn {
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}

const teacher = new Teacher('Mosh', 'MSc');

//Modules
//each class in personal file but have to make them public by prefeix class with export

//Named and Default Exports

//Default -> import ....... from '';
//Named -> import{......} from '';

import Teacher, { promote } from "./teacher";
import React, { Component } from 'react';
