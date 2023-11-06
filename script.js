//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

localStorage.setItem('firstName','Khushi');
localStorage.setItem('lastName','Nain');
localStorage.setItem('age','19');
localStorage.setItem('Country','India');
localStorage.setItem('State','Chandigarh');

console.log(localStorage);


//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
console.log(localStorage.getItem('firstName'))
console.log(localStorage.getItem('lastName'))
console.log(localStorage.getItem('age'))
console.log(localStorage.getItem('Country'))
console.log(localStorage.getItem('State'))
console.log(localStorage);

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
localStorage.removeItem('State');
console.log(localStorage);

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

localStorage.clear();
console.log(localStorage);

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

let stringified = JSON.stringify(user);
console.log(stringified);
