console.log('hello there lovely people');

function processResponse(response){
    return response.json();
}

//Show the joke on the page:
//1. make the request using fetch()
fetch('https://icanhazdadjoke.com',{
    headers:{
        Accept: 'application/json'
    }
})
.then(response => {
    console.log(response);
    // let parsedResp = Json.parse(response);
    // console.log(parsedRsep);
    const pendingData = response.json();
    console.log(pendingData);

    return pendingData; // returns to the next .then()
})// convert to Json
.then(finisheddata =>{
    console.log(finisheddata);
    return finisheddata.joke;
})
.then(theJoke=>{
    console.log(theJoke);
})
.catch(err => console.log(err))

//2. grab the .joke
//3. render it to the page

//alternative to use .catch() is to pass a second callback to .then
// fetch('https://icanhazdadjoke.com',{
//     headers:{
//         Accept: 'application/json'
//     }
// })
// .then(response => response.json(), err => console.log(err))