const apiUrl = "https://jsonplaceholder.typicode.com/users/1"

fetch(apiUrl)
    .then(response=>response.json())
    .then(data=>{
        // console.log(data)
        console.log
    })
    // .then(function(response){
    //     return response.json()
    // })