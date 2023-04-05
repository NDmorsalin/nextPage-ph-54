const fetchAllBooks=async ()=>{
    const req = await fetch('https://api.itbook.store/1.0/new')
    return await req.json()
}
const fetchBook=async ({params})=>{
    const req = await fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
    return await req.json()
}

export {fetchAllBooks,fetchBook}