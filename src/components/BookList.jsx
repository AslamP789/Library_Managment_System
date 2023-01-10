import { useState, useEffect } from "react";
import '../styles/BookList.css'
import { useNavigate } from "react-router-dom";

const BookList = () => {
    let [books, setBooks] = useState([])
    let navigate=useNavigate();
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4567/books")
            let data = await response.json();
            setBooks(data)
        }
        fetchData()
    }, [books])
    let handleDelete = (id, title) => {
        // setBooks(books.filter(x => x.id !== id))
        fetch(`http://localhost:4567/books/${id}`,{
            method:`DELETE`
        })
        alert(`${title} has been deleted`)
    }
    let readmore=(id)=>{
        navigate(`/admin/book_list/${id}`)
    }
    return (
        <div className="booklist">
            <h1>BookList :{books.length}</h1>
            <div className="books_section">
                {
                    books.map(data => (
                        <div className="books">

                            <div className="books_card">
                                <div className="book_image">
                                    <img src={data.thumbnailUrl} alt="" />
                                </div>
                                <div className="books_data">
                                    <h2>{data.title}</h2>
                                    <p><b>Authors:</b> {data.authors.toString()}</p> 
                                    <p><b>Category:</b> {data.categories.toString()}</p>
                                    <p><b>Page Count:</b>{data.pageCount}</p>
                                    <button id="btnread" onClick={()=>readmore(data.id)}>Read more</button>
                                    <button onClick={() => handleDelete(data.id, data.title)} >Delete</button>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default BookList;