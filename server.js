const express = require('express');
const app = express(); //calling express function
app.set('view engine', 'ejs'); //setting up the view engine to ejs

// setting up a route(get, post, put, delete), first parameter is the route, second parameter is the function
// req & res are the request and response objects / naming conventions
app.get('/', (req, res) => {
    console.log('Here')
    //res.download('server.js'); //downloads the file
    res.render("index", {text:'World'})
    
})

//router is a middleware or a smaller version of your express application

app.get('/users', (req, res) => { })//route for users

app.listen(3000); //listening to port 3000