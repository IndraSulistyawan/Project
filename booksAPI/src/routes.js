const {addNoteHandler, getAllBooks, getBooksById, editBooksById} = require("./handler")

const routes = [
    {
        method: "POST",
        path: "/books",
        handler: addNoteHandler,
    },
    {
        method: "GET",
        path: "/books",
        handler: getAllBooks
    },
    {
        method: "GET",
        path: "/books/{bookid}",
        handler: getBooksById
    },
    {
        method: "PUT",
        path: "/books/{bookid}",
        handler: editBooksById
    }
]

module.exports = routes