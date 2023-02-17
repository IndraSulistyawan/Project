const {addNoteHandler, getAllBooks, getBooksById} = require("./handler")
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
    }
]

module.exports = routes