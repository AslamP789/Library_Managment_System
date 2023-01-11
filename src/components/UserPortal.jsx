import { Route,Routes } from "react-router-dom";
import UserNavabr from "./UserNavbar";
import UserDashBoard from "./UserDashBoard";
import BookList from "./BookList";
import ReadMore from "./ReadMore";
const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavabr/>
            <Routes>
                <Route path="/" element={<UserDashBoard/>} />
                <Route path="/book_list/:id" element={<ReadMore/>} />
                <Route path="/book_list" element={<BookList/>} />
                
            </Routes>

        </div>
      );
}
 
export default UserPortal;