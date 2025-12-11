const apiUrl='http://localhost:3000/books'
const newBook={
  "titel":"java2",
  "author":"someone",
}

await fetch(apiUrl,{
  method:"POST",
  body:JSON.stringify(newBook)

})