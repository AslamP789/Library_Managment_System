import { useState } from "react";
import '../styles/AddBook.css'
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    let [title, setTitle] = useState("")
    let [categories, setCategories] = useState("")
    let [authors, setAuthors] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShort] = useState("")
    let [longDescription, setLong] = useState("")
    let [thumbnailUrl, setUrl] = useState("")
    let navigate = useNavigate();
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let handleSubmit = (e) => {
        e.preventDefault();
        // data to be posted
        let bookData = {title, categories, authors, pageCount, shortDescription, longDescription, thumbnailUrl}
        fetch('http://localhost:4567/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        alert('book added sucesfully')
        navigate('/admin/book_list')
    }

    return (
        <div className="addbook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit} >
                    <div className="title" >
                        <input type="text" required placeholder="Title of the book" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="categories" >
                        <input type="text" required placeholder="Enter category" value={categories} onChange={(e) => setCategories(e.target.value)} />
                    </div>
                    <div className="authors" >
                        <input type="text" required placeholder="Enter Authors" value={authors} onChange={(e) => setAuthors(e.target.value)} />
                    </div>
                    <div className="pageCount" >
                        <input type="number" required placeholder="Enter Pagecount" value={pageCount} onChange={(e) => setPageCount(e.target.value)} />
                    </div>
                    <div className="shortDescription" >
                        <textarea name="" id="" cols="80" rows="10" placeholder="short Description for the title" value={shortDescription} onChange={(e) => setShort(e.target.value)}></textarea>
                    </div>
                    <div className="longDescription" >
                        <textarea name="" id="" cols="80" rows="10" placeholder="long Description for the title" value={longDescription} onChange={(e) => setLong(e.target.value)} ></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" required placeholder="url of the image" value={thumbnailUrl} onChange={(e) => setUrl(e.target.value)} />
                    </div>
                    <button>Add Book</button>
                </form>

            </div>
        </div>
    );
}

export default AddBook;