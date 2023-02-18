const {nanoid} = require('nanoid')
const books = require('./books')

const addNoteHandler = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload
    const id = nanoid(16)
    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt
    
    finished = (pageCount === readPage) ? true : false;

    const newBooks = {
        id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt
    }

    books.push(newBooks);

    const isSucces = books.filter((note) => note.id === id);

    if(isSucces){
        const response = h.response({
            status: "succes",
            message: "Buku berhasil ditambahkan",
            data: {
                noteId: id
            }
        })
        response.code(200)
        return response
    }

    if(!name){
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. Mohon isi nama buku",
            
        })
        response.code(400)
        return response
    }

    if(readPage > pageCount){
        const response = h.response({
            status: "fail",
            message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        })
        response.code(400)
        return response
    }

    const response = h.response({
        status: "fail",
        message: "Gagal menambahkan buku. Terjadi kesalahan pada server."
    })
    response.code(500)
    return response;
}

const getAllBooks = () => ({
    status: 'succes',
    data: {
        books,
    }
});

const getBooksById = (request, h) => {
    const {id} = request.params

    const book = books.filter((n) => n.id === id)[0]; 

    if(book !== undefined){
        const response = h.response({
            status: "succes",
            data: {
                book
            }
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      });
      response.code(404);
      return response;
}

const editBooksById = (request, h) => {
    const {id} = request.params

    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload
    const updatedAt = new Date().toISOString()

    const index = books.findIndex((book) => book.id === id)

    if (index !== -1) {
        books[index] = {
          ...books[index],
          name,
          year,
          author,
          summary,
          publisher,
          pageCount.
          readPage,
          reading,
          updatedAt,
        };
        const response = h.response({
            status: "succes",
            message: "Buku berhasil diperbarui",
        })
        response.code(200)
        return response
    }

    if(!name){
        const response = h.response({
            status: "fail",
            message: "Gagal memperbarui buku. Mohon isi nama buku",
            
        })
        response.code(400)
        return response
    }

    if(readPage > pageCount){
        const response = h.response({
            status: "fail",
            message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
        })
        response.code(400)
        return response
    }

    const response = h.response({
        status: "fail",
        "Gagal memperbarui buku. Id tidak ditemukan",
    })


}

const deleteBookById = (request, h) => {
    const {id} = request.params
    const index = books.findIndex((book) => book.id === id)

    if(index !== -1){
        books.splice(index, 1)
        const response = h.response({
            status: 'succes',
            message: 'Buku berhasil dihapus',
          });
          response.code(200)
          return response
    }

    const response = h.response ({
        status: "fail",
        message: "Buku gagal dihapus. Id tidak ditemukan",
    })
    response.code(404)
    return response
}


module.exports = {
    addNoteHandler,
    getAllBooks,
    getBooksById,
    editBooksById,
}