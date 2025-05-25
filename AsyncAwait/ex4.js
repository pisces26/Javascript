//real world example
const API_URL= "https://api.github.com/users/pisces26";

async function handlePromise() {
    //error handling
    try{

    const data= await fetch(API_URL) //fetch returns a promise
    //fetch() => Response object readable stream convert to json/string/text

    const jsonValue= await data.json()
    // fetch().then(res=> res.json()).then(res=> console.log(res)); // using .then
    console.log(jsonValue); // prints the user data from GitHub API

    }
    catch(errr){
        console.log(err);
    }
}
handlePromise()
// .catch(err=> console.log(err));