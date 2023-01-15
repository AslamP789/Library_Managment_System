import { useState } from 'react';
import '../styles/admindashboard.css'
const AdminDashBoard = () => {
    // let contents=[
    //     {
    //         image:"/images/red.webp",
    //         header:"At the Library this January ...",
    //         publish:"By Erika Berlin on December 29, 2022",
    //         description:"Greenwich Library has a full schedule of (free!)  enrichment events throughout January. Speak with  a librarian or check the online…",
    //         link:"Take a Look"
    //     },
    //     {
    //         image:"/images/red.webp",
    //         header:"Friends Friday Films Annoumces Its Winter Screenings",
    //         publish:"By Erika Berlin on December 28, 2022",
    //         description:"Greenwich Library's longest-running  program—the Friends Friday Films series—is back with a full slate of movies, beginning on January 6. The…"
    //     },
    //     {
    //         image:"/images/red.webp",
    //         header:"AuthorsLive:Barbara Gage,author of G-Man:J,Edgar Hoover and the Making of the American Century",
    //         publish:"By Erika Berlin on December 13, 2022",
    //         description:"Greenwich Library is excited to welcome Yale professor and author  Beverly Gage to its AuthorsLive series.Gage will discuss G-Man:…"
    //     }
    // ]
    // let [state,setStates]=useState(contents)
    return (
        <div className="admin_dash_board">
            <h1>Welcome To Admin Home</h1>
            <div className="fstblock">

                <div className="fstblock_dash">
                    <h2><span>At the Library this January ...</span></h2>
                    <p>By Erika Berlin on December 29, 2022</p>
                    <p>Greenwich Library has a full schedule of (free!) <br /> enrichment events throughout January. Speak with <br /> a librarian or check the online…</p>
                    <a href="">Take a Look</a>
                </div>
            </div>
            <div className="scndblock">
                <div className="scndblock_dash">
                    <h2><span>Friends Friday Films Annoumces <br />Its Winter Screenings</span></h2>
                    <p>By Erika Berlin on December 28, 2022</p>
                    <p>Greenwich Library's longest-running <br /> program—the Friends Friday Films <br /> series—is back with a full slate of <br /> movies, beginning on January 6. The…</p>
                    <a href="">Take a Look</a>
                </div>
            </div>
            <div className="thirdblock">
                <div className="thirdblock_dash">
                    <h2><span>AuthorsLive:Barbara Gage, <br />author of "G-Man:J,Edgar <br />Hoover and the Making of the <br />American Century</span></h2>
                    <p>By Erika Berlin on December 13, 2022</p>
                    <p>Greenwich Library is excited to <br /> welcome Yale professor and author <br /> Beverly Gage to its AuthorsLive series. <br /> Gage will discuss G-Man:…</p>
                    <a href="">Take a Look</a>
                </div>
            </div>
            {/* {
                state.map(data=>(
                    <div className="admindashcard">
                        <div className="adminbackground">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="admincontent">
                            <h1>{data.header}</h1>
                            <p>{data.publish}</p>
                            <p>{data.description}</p>
                        </div>
                     

                    </div>
                ))
            } */}


        </div>
    );
}

export default AdminDashBoard;