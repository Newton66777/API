const apiUrl=`http://localhost:3000/user`
const newUser={
  "name":"Newton",
  "email":"sumi@gmail.com",
}

await fetch(apiUrl,{
  method:"POST",
  body:JSON.stringify(newUser)

})