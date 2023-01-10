import '../styles/LandingPage.css'
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (

        <div className="landingpage">
            <div className="home">
                <div className="selectLoginType">
                    <h1>Library Management System</h1>
                    <div className="image">
                            <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-orange.png" alt="" />
                            <img src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-green-icon-symbol-transparent-png-11639594320ayr6vyoidq.png" alt="" />
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