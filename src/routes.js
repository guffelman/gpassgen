const express = require('express');
const route = express.Router();
const cors = require('cors');
require('dotenv').config()
const words = require('./json/dictionary.json')
// Create array of object keys, ["311", "310", ...]


//Random Number Function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const keys = Object.keys(words)



route.get('/', (req, res) => {

// Generate random index based on number of keys
const randIndex = Math.floor(Math.random() * keys.length)
const randIndex2 = Math.floor(Math.random() * keys.length)
const randIndex3 = Math.floor(Math.random() * keys.length)

// Select a key from the array of keys using the random index
const randKey = keys[randIndex]
const randKey2 = keys[randIndex2]
const randKey3 = keys[randIndex3]

const word1 = words[randKey].charAt(0).toUpperCase() + words[randKey].slice(1);
//const word2 = words[randKey2]
//const word3 = words[randKey3]



res.render('index', {  phrase : word1 +'_'+ words[randKey2] +'_'+words[randKey3] + '!' + getRndInteger(1,9)});
// ...

});


//get route to generate a password with a random number, with a parameter of the length of the password
route.get('/:length', (req, res) => {
  
  // Generate random index based on number of keys
  const randIndex = Math.floor(Math.random() * keys.length)
  const randIndex2 = Math.floor(Math.random() * keys.length)
  const randIndex3 = Math.floor(Math.random() * keys.length)
  
  // Select a key from the array of keys using the random index
  const randKey = keys[randIndex]
  const randKey2 = keys[randIndex2]
  const randKey3 = keys[randIndex3]
  
  const word1 = words[randKey].charAt(0).toUpperCase() + words[randKey].slice(1);
  //const word2 = words[randKey2]
  //const word3 = words[randKey3]
  res.status(200).json({ phrase : word1 +'_'+ words[randKey2] +'_'+words[randKey3] + '!' + getRndInteger(1,9)});
})


route.get('/generate', cors(), (req, res)=>{


  // Generate random index based on number of keys
const randIndex = Math.floor(Math.random() * keys.length)
const randIndex2 = Math.floor(Math.random() * keys.length)
const randIndex3 = Math.floor(Math.random() * keys.length)

// Select a key from the array of keys using the random index
const randKey = keys[randIndex]
const randKey2 = keys[randIndex2]
const randKey3 = keys[randIndex3]

const word1 = words[randKey].charAt(0).toUpperCase() + words[randKey].slice(1);


// Use the key to get the corresponding name from the "names" object
const name = words[randKey]
res.status(200).json({   password : word1 +'_'+ words[randKey2] +'_'+words[randKey3] + '!' + getRndInteger(1,9) }).end();

// 

})


module.exports = route;
