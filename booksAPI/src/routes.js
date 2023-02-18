const {addBooksHandler, getAllBooks, getBooksById, editBooksById, deleteBookById} = require("./handler")

const routes = [
    {
        method: "POST",
        path: "/books",
        handler: addBooksHandler,//
    },
    {
        method: "GET",
        path: "/books",
        handler: getAllBooks//
    },
    {
        method: "GET",
        path: "/books/{id}",
        handler: getBooksById
    },
    {
        method: "PUT",
        path: "/books/{id}",
        handler: editBooksById
    },
    {
        method: "DELETE",
        path: "/books/{id}",
        handler: deleteBookById
    }

]

module.exports = routes