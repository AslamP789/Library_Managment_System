import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/ReadMore.css'

const ReadMore = () => {
    let [books, setBooks] = useState([]);
    let params = useParams(); //to get route parameter
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4567/books/${params.id}`)
            let data = await response.json();
            setBooks(data)
        }
        fetchData();
    }, [books])

    return (
        <div className="readmore">
            <div className="readcard">
                
                <h2>{books.title}</h2>

                <div className="cardfooter">
                    <p>{books.shortDescription}</p>
                    <p>{books.longDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ReadMore;