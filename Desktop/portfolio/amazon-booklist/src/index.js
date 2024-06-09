import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import css from './index.css';


export const App = () => {
    return (
        <div>
            <Booklist/>
        </div>
    )
}

const books = [
    {
        id: 1,
        title: "The Balck Bird",
        image: "https://m.media-amazon.com/images/I/814420yLhgL._SL1500_.jpg",
        author: "Tim Weaver"
    },
    {   
        id: 2,
        title: "The Snowdonia Killings",
        image: "https://m.media-amazon.com/images/I/91LIb5+flOL._SL1500_.jpg",
        author: "Simon McCleave"
    },
    {
        id: 3,
        title: "The Lost Bookshop",
        image: "https://m.media-amazon.com/images/I/91GYtFqr3GL._SL1500_.jpg",
        author: "Evie Woods"
    }
]

export const Booklist = () => {
    
    const [showBooks, setShowBooks] = useState(false);
    const [hideBooks, setHideBooks] = useState(true);

    const handleShowBooks = () => {
        setShowBooks(true);
        setHideBooks(false);
    }
    const handleHideBooks = () => {
        setHideBooks(true);
        setShowBooks(false);
    }
    
    return (
        <main>
            <header className="header">
                <h1>Amazon Best Sellers</h1>
                <p>Our most popular products based on sales. Updated frequently.</p>
            </header>
            {showBooks && <button className="showButton" type="button" onClick={handleHideBooks}>Hide Books</button>}
            {hideBooks && <button className="showButton" type="button" onClick={handleShowBooks}>Show Books</button>}
            {showBooks && <section className="booklist">
                {books.map(book => {
                    return (
                        <Book {...book} key={book.id}/>
                    )
                })}
            </section>}
        </main>
    )
}

export const Book = (props) => {
    const {title, image, author, id} = props
    return (
        <div className="book">
            <p className="bookNumber"># {id}</p>
            <img className="bookImage" src={image} alt=""/>
            <h2 className="bookTitle">{title}</h2>
            <h3 className="bookAuthor">{author}</h3>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);