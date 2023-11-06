/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
    // creating empty result array
    const filteredItems = [];
    // looping over items list to find each obj
    for (let item of items) {
      let isMatch = true; //flag
      // looping over searchObj
      for (let key in searchObj) {
        // conditional to check if the obj were looping over is not equal
        // to the searchObj
        if (item[key] !== searchObj[key]) {
          isMatch = false;
          break;
        }
      }
      // if there is a match isMatch wouldnt have been set to false
      // so we push that item into our filteredItems array
      if (isMatch) {
        filteredItems.push(item);
      }
    }
    return filteredItems;
  }


console.log(findObjectsFilter(searchFor1, items))
console.log(findObjectsFilter(searchFor2, items))
/*
 create an output array, set it equal to an empty array
 make a for loop that loops 
*/