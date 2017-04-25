const express   = require('express');
//const makes express a variable that can't be changed.
// makes express.js usable throughout this app 
const logger    = require('morgan');
//const makes logger a variable that can't be changed.
// makes  morgan usable throughout this app; morgan automates the logging of requests, reponses and related data
const app       = express();
//const makes app a variable that can't be changed.
// calls the const express along with an anonymous function to deploy express within the app
const PORT      = process.env.PORT || 3000;
// const makes PORT a variable that can't be changed.
//makes it so that if you don't specify a port number it will default to 3000
const coinToss = require('./cointoss.js');
//const makes coinToss a variable that can't be changed. makes cointoss.js usable throughout this app

app.use(logger('dev'));
// makes const logger useable with the dev parameter
app.get('/', (req, res) => {
  res.send('<h1>Hello Hypatia Students!</h1>');
});
// Grabs the home page and requires and respond with an html h1 tag that has the coinToss fucntion embedded in it
app.get('/coin', (req, res) => {
  res.send(`<h1>${coinToss()}</h1>`);
});
// Grabs the home page and requires and responds with 

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
// App listens to the port, grabs the const PORT. it console logs 'Listening on port', along with the port number.