import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){
    const [books, setBooks] = useState([]);

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
        <BookList books={books}/>
        <BookCreate onCreate={createBook} />
    </div>
    )
}

export default App;