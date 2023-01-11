import { Link } from "react-router-dom";
const UserNavabr = () => {
    return ( 
        <div className="user_navbar">
             <div className="navbar">
            <div className="logo">
                <img height="50" width="50" src="https://icons.veryicon.com/png/o/object/material_design_icons/library-94.png" alt="" />
                <h6>User Portal</h6>
                {/* <h2>User Portal</h2> */}
            </div>
            <div className="link">
                <Link to='/user/' >DashBoard</Link>
                <Link to='/user/book_list'>Book List</Link>
                <Link to='/' >LogOut</Link>
            </div>
           </div>
        </div>
     );
}
 
export default UserNavabr;