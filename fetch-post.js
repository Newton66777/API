const apiUrl = 'http://localhost:3000/books'
const newBook = {
    'title': 'mastering php',
    'author': 'someone',
    'id':"5"
}

await fetch(apiUrl,{
    method:"POST",
    body:JSON.stringify(newBook)
})


