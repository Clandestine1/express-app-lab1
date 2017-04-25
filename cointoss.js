module.exports = () => Math.random() > .5 ? 'Heads' : 'Tails';
// module.exports puts this function into index.js file so that it can be used upon the calling of the js file. 
// Math.random is a built in object that randomizes the output. 
// In this case it randomizes the parameters of heads and tails causing a random occurance each time the functon is called