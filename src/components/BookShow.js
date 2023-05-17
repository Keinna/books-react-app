import {useState} from 'react';
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit}){
const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    return ( 
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <div className="edit" onClick={handleEditClick}>Edit</div>
                <button className="delete" onClick={handleDeleteClick}></button>
            </div>
        </div>
    )
}

export default BookShow;