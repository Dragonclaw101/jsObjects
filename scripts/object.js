'use strict';

let myObj = {
	
	nameFirst: 'Daniel',
	nameLast: 'Michael',
	age: 17,
	school: 'New York Public High School',
	state: 'New York',
	favFood: 'Pizza',
	favSubs: ['Chemistry', 'English', 'History'],
	family: [{name:'Sally sister'}, {name:'Billy brother'}],
};

console.log('My person\'s first name is ' + myObj.nameFirst);
console.log('My person\'s last name is ' + myObj.nameLast);
console.log('My person\'s age is ' + myObj.age + ' years old');
console.log('My person attends ' + myObj.school);
console.log('My person lives in ' + myObj.state);
console.log('My person\'s favorite food is ' + myObj.favFood);

console.log('My person family ' + myObj.family[1].name);