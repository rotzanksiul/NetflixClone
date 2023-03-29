import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-boxes">

                    <div className="footer-box">
                        <a href="#">Audio Description</a>
                        <a href="#">Investor Relations</a>
                        <a href="#">Privacy</a>
                        <a href="#">Contact Us</a>
                    </div>

                    <div className="footer-box">
                        <a href="#">Help Center</a>
                        <a href="#">Jobs</a>
                        <a href="#">Legal Notices</a>
                        <a href="#">Do Not Sell or Share My Personal information</a>
                    </div>

                    <div className="footer-box">
                        <a href="#">Gift Cards</a>
                        <a href="#">Netflix Shop</a>
                        <a href="#">Cokie Preferences</a>

                    </div>

                    <div className="footer-box">
                        <a href="#">Media Center</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Corporate Information</a>
                    </div>

                </div>


                <div className="button-box">
                    <button>Service Code</button>
                    <div >
                    <span className="footer-name">Built with love by Luis H</span>
                    </div>
                    
                </div>

            </div>



        </div>
    );
}

export default Footer;