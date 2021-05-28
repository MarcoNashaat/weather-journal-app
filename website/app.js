/* Global Variables */
const baseURL=`https://api.openweathermap.org/data/2.5/weather?zip=`;
const apikey=`&appid=f4d693f0f3b21ac778a9e47c00bb241f`;


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//event on generate button
document.getElementById('generate').addEventListener('click',appFunction());

//declaring apFunction
function appFunction(){
    //getting zip code user entered
    let zip=document.getElementById('zip').value;

    //getting feelings user entered
    let feelings=document.getElementById('feelings').value;

    //async function to get weather data
    const weatherData= async(baseURL,zip,apikey)=>{
        //fetching data based on user entered zip code
        const response=await fetch(baseURL+zip+apikey);

        try {
            //turning data into json data
            await response.json();
            console.log(response);
           
        
           
            //catching errors
        } catch (error) {
            console.log('error found'+error);
        }    
    }

    //async function to post data on server
    const postData=async(url='',projectData={})=>{
        const response=await fetch(url,{
            method:'POST',
            credentials:'same-origin',
            body:json.stringfy(data),
            headers:{
                'Content-Type':'application/json'
            }
        })

        try {
            const recievedData=await response.json();
            return recievedData;
        } catch (error) {
            console.log(error)
        }
    }

    //async function for interface updating 
    const interfaceUpdate= async()=>{
        const request=await fetch ('/getRoute')

        try {
            const data= await request.json();
            document.getElementById('date').innerHTML="Date: "+d;
            document.getElementById('temp').innerHTML="Temperature: "+data[0].temp;
            document.getElementById('content').innerHTML="I feel "+data[0].content;
        } catch (error) {
            console.log(error)
            
        }
    }
}

