import '../styles/AdminNavbar.css'
import { Link } from "react-router-dom"
const AdminNavbar=()=>{
    return(
        <div className="admin_navbar">
           <div className="navbar">
            <div className="logo">
                <img height="50" width="50" src="https://icons.veryicon.com/png/o/object/material_design_icons/library-94.png" alt="" />
                <h6>Admin Portal</h6>
            </div>
            <div className="link">
                <Link to='/admin/' >DashBoard</Link>
                <Link to='/admin/add_book'  >Add Book</Link>
                <Link to='/admin/add_user' >Add User</Link>
                <Link to='/admin/book_list'>Book List</Link>
                <Link to='/admin/user_list'>User List</Link>
                <Link to='/' >LogOut</Link>
            </div>
           </div>
        </div>


    )
}
export default AdminNavbar