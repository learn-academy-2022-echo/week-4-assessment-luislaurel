// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe will take in func shuffleTime
// it - takes in an array, removes the first item from the array and shuffles the remaining content.
// expect colors1 to equal 


    describe("shuffleTime", () => {
        it("takes in an array, removes the first item from the array and shuffles the remaining content", ()=> {
            expect(shuffleTime(colors1)).toEqual(expect.not.arrayContaining(["purple"]))
            expect(shuffleTime(colors2)).toEqual(expect.not.arrayContaining(["chartreuse"]))
        })
    })



 FAIL  ./code-challenges.test.js
  shuffleTime
    ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

  ● shuffleTime › takes in an array, removes the first item from the array and shuffles the remaining content

    ReferenceError: shuffleTime is not defined

// b) Create the function that makes the test pass.

// create function named shuffleTime
// takes in colors1,2 array
// remove first item 
// .shift() to remove item at first index
// shuffle rest .sort(), but sort will return the same array, inside i used Math.random() to randomize it
// output random array excluding removed item

const shuffleTime = (arr) => {
arr.shift()
arr.sort(() => Math.random() - 0.5)
   return arr
}


 PASS  ./code-challenges.test.js
  shuffleTime
    ✓ takes in an array, removes the first item from the array and shuffles the remaining content (5 ms)

Test Suites: 1 passed, 1 t
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.
// describe - takes in func - upDown
// it - takes in an object that contains up votes and down votes and returns the net total of votes.
// toEqual - 11 , -31
const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("upDown",() => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", ()=> {
        expect(upDown(votes1)).toEqual(11)
        expect(upDown(votes2)).toEqual(-31)
    })

}) 

 FAIL  ./code-challenges.test.js
  upDown
    ✕ takes in an object that contains up votes and down votes and returns the net total of votes. (1 ms)

  ● upDown › takes in an object that contains up votes and down votes and returns the net total of votes.

    ReferenceError: upDown is not defined

// b) Create the function that makes the test pass.
// create func named upDown
// take in obj
// Object.values() will return an array of the values within an object. [13, 2]
// .reduce will take an array an reduce those values down to a single value.
// return up - down
// output should be 11/ -31

const upDown = (obj) => {
 return Object.values(obj).reduce((a, b) => a - b)
}

 PASS  ./code-challenges.test.js
  upDown
    ✓ takes in an object that contains up votes and down votes and returns the net total of votes. (2 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// describe takes in func oneArray 
// it takes in two arrays as arguments and returns one array with no duplicate values
// expect ["array", "object", "number", "string", "Boolean", "null", "undefined"]

const dataArray1 = ["array", "object", "number", "string", "Boolean"]

const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe ("oneArray", () => {
    it("it takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(oneArray(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})


 FAIL  ./code-challenges.test.js
  oneArray
    ✕ it takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

  ● oneArray › it takes in two arrays as arguments and returns one array with no duplicate values

    ReferenceError: oneArray is not defined

// b) Create the function that makes the test pass.

// create func oneArray
// create new var to store value of both arrays
// takes in 2 arrays
// returns one array, no duplicate values
// use spread operator
// ended up using spread operator with new Set. 
// A Set is a collection of unique values, so I am creating a new Set and it is taking the value of both arrays. But since it is unique it will only have each value once.

const oneArray = (arr1,arr2) => {
  lastArray = [...new Set([...arr1, ...arr2])]
    return lastArray
}


 PASS  ./code-challenges.test.js
  oneArray
    ✓ it takes in two arrays as arguments and returns one array with no duplicate values (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.339 s, estimated 1 s
Ran all test suites.
✨  Done in 1.08s.
