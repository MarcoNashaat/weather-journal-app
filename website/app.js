/* Global Variables */
const key='' //enter personal api key


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

//getting informatin from user
zip=document.getElementById('zip');


//async function to fetch data
document.getElementById('generate').addEventListener('click',async()=>{
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip.value}&appid=${key}&units=metric`);
    const data=await res.json();
    let temp=data.main.temp;

     //console.log(data);  //testing

// posting data to server
const postData=await fetch('/postRoute',{
            method:'POST',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                date:newDate,
                temp:temp,
                feelings:document.getElementById('feelings').value
            })
            
});
const returnedData=await fetch('/getRoute',{
    'credentials':'same-origin'
})

// const y=returnedData.json();  //testing
// console.log(y)



//updating interface

     const finalData= await returnedData.json();
     //console.log(finalData);  //testing
    document.getElementById('date').innerHTML="Date: "+finalData.date;
    document.getElementById('temp').innerHTML="Temp: "+finalData.temp;
    document.getElementById('content').innerHTML="I feel "+finalData.feelings;


})

