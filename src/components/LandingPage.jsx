import '../styles/LandingPage.css'
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (

        <div className="landingpage">
            <div className="home">
                <div className="selectLoginType">
                    <h1>Library Management System</h1>
                    <div className="image">
                            <img src="images/admin.png" alt="" />
                            <img src="images/user.png" alt="" />
                    </div>
                    <div className="btn">
                        <div className="btn1">

                            <button><Link to='admin_login'>Admin Login</Link></button>
                        </div>
                        <div className="btn2">

                            <button><Link to='/user-login'>User Login</Link></button></div>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default LandingPage;