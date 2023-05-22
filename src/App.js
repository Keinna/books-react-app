import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const editBookByID = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }
            return book;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title,
        });
        console.log(response);
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    return (
        <div className="app">
            <div className="container-title">
                <h1>Book Management App</h1>
            </div>
            <BookList
                books={books}
                onDelete={deleteBookById}
                onEdit={editBookByID}
            />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
