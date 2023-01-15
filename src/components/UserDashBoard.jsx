import '../styles/userDashboard.css'
const UserDashBoard = () => {
    return ( 
        <div className="userdashboard">
            <h1>Welcome to user portal</h1>
            <div className="fstuser">
               <div className="userblock1">
               <h4>LEARN</h4>
                <h1><span>LinkedIn Learning</span></h1>
                <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of 
                    courses and video tutorials where you can discover, complete, and track courses related to
                    your industry or interests.</p>
                <button>Get More</button>
               </div>
            </div>
            <div className="scnduser">
                <div className="userblock2">
                    <h1><span>Learn Something New or Get Tech Help</span></h1>
                    <p>Register on the online calendar. For more information call (203) 622-7920.</p>
                    <button>View Calender</button>
                </div>
            </div>
            <div className="thirduser">
                <h1>spanTech Training eNewsletter</h1>
                <p>Stay up-to-date on the latest Technology programs and <br /> events by subscribing to the Library's Tech <br /> Training eNewsletter.</p>
                <button>Sign Up</button>
            </div>
            <div className="fourthuser">
                <div className="userblock41">
                     <h1>Sign Up for Our Newsletter</h1>
                     <p>Stay up to date with library events, new 
                        <br /> books, or what's going on in our
                     <br />
                      community.</p>
                     <button>Sign Up</button>
                </div>
                <div className="userblock42">
                     <h1>Support The Library</h1>
                     <p>Donate today and help ensure that the Library
                         <br /> continues to evolve to meet the needs of our
                          <br /> community.</p>
                     <button>Donate Now</button>
                </div>
            </div>
            <div className="userblock43">
                <div className="user_block44">
                    <ul>
                        <li><a href="">Help</a></li>
                        <li><a href="">Content</a></li>
                        <li><a href="">Donate</a></li>
                        <li><a href="">Newsletter</a></li>
                        <li><a href="">sitemap</a></li>
                        <li><a href="">Hours&Location</a></li>
                    </ul>

                </div>
                <div className="userblock4_logo">
                    <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/social/facebook.svg" alt="" />
                    <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/social/twitter.svg" alt="" />
                    <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/social/google.svg" alt="" />
                    <img src="https://www.greenwichlibrary.org/wp-content/themes/greenwich-sage/assets/images/icons/social/instagram.svg" alt="" />
                </div>

            </div>
        </div>
     );
}
 
export default UserDashBoard;