import { useEffect, useState } from "react";
import "./Navbar.css"


const Navbar = () => {

    const [show, handleShow] = useState(false);



    {/* When scrolling make the nav background have a dark color  applying a class */}

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        });

      }, []);

      {/*Netflix Icon and Logo */}
    return (
        <div className={`navbar ${show && 'nav-black'}`}>
            <img
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="nav-user"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Logo"
            />


        </div>
    );
}

export default Navbar;