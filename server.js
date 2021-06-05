// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');

//Require cors and body parser
const cors=require('cors');
const bodyParser=require('body-parser');

// Start up an instance of app
const app=express();

//Setting port to listen to
const port=3200;

//server testing
server=app.listen(port,function(){
    console.log(`server running on port ${port}`)
})

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//setting up a get route
app.get('/getRoute',getCallback())
//get function
function getCallback(req,res){
   
    res.send(projectData);
    
    console.log(projectData);
}

//setting up a post route
app.post('/postRoute',postCallback())
//post function

function postCallback(request,response){
    let data=request.body;
    newData={
        temperature:data.temperature,
        date:data.date,
        content:data.content
    }

    projectData.push(newData);
}
