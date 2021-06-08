// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const { request, response } = require('express');

// Start up an instance of app
const app=express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=4500;
app.listen(port,()=>{
    console.log('server running on port '+port)
})

//get route
app.get('/getRoute',(request,response)=>{
    response.send(projectData);
})

//post route
app.post('/postRoute',(request,response)=>{
    console.log(request.body);
    projectData.temp=request.body.temp;
    projectData.date=request.body.date;
    projectData.feelings=request.body.feelings;

    response.end();
})

