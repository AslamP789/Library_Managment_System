import AdminNavbar from "./AdminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashBoard from "./AdminDashBoard";
import BookList from "./BookList";
import UserList from "./UserList";
import ReadMore from "./ReadMore";
import AddBook from "./AddBook";
import AddUser from "./AddUser";
const AdminHome=()=>{
    return(
        <div className="adminhome">
         <AdminNavbar/>
         <Routes>
            <Route path="/" element={<AdminDashBoard/>} />
            <Route path='/book_list' element={<BookList/>} />
            <Route path='/user_list'element={<UserList/>}  />
            <Route path="/book_list/:id" element={<ReadMore/>} />
            <Route path="/add_book" element={<AddBook/>} />
            <Route path="add_user" element={<AddUser/>} />
         </Routes>
        </div>
    )
}
export default AdminHome;