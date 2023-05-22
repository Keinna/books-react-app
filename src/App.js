import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const editBookByID = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return { ...book, title: newTitle};
            }
            return book;
        });

        setBooks(updatedBooks);
    }

    const createBook = (title) => {
        const updatedBooks = [
            //go and find the existing books piece of state and copy them into new array
            ...books,
            {id: Math.round(Math.random() * 99999), title}
        ]
        setBooks(updatedBooks)
        console.log(updatedBooks)
    }

return( 
    <div className="app">
      <div className="container-title">
      <h1>Book Management App</h1>
      </div>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookByID}/>
        <BookCreate onCreate={createBook} />
      
    </div>
    )
}

export default App;