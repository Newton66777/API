
async function getEmail(id = 1) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}` //template literal
    // const apiUrl = 'https://jsonplaceholder.typicode.com/users/' + id;
    //string interpolation
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.email
}

function getEmail2(id=1){
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}` 
    let email = ''
    fetch(apiUrl)
    .then(response=>response.json())
    .then(data=>{
        console.log('data retrieved')
        email = data
    })
    console.log('out')
    return email;
}

console.log( getEmail2(2))