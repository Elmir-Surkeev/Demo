import './app-footer.css';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-left">
                    <div className="footer-title">
                        <div className="footer-title-ico"></div>
                        <div className="footer-title-text">Lasles <span>VPN</span></div>
                    </div>
                    <div className="footer-title-under">
                    <span>LaslesVPN</span> is a private virtual network that <br/> has unique features and has high security.
                    </div>
                    <div className="footer-icons">
                        <div className="footer-ico"></div>
                        <div className="footer-icoTw"></div>
                        <div className="footer-icoInst"></div>
                    </div>
                    <div className="footer-a">
                        ©2020Lasles<span>VPN</span>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="nameA">
                            Product
                            <ul>
                                <li><a href="#">Download</a></li>
                                <li><a href="#">Locations</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Server</a></li>
                                <li><a href="#">Countries</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                    </div>
                    <div className="nameA">
                            Engage
                            <ul>
                                <li><a href="#">LaslesVPN ? </a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Tutorials</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                    </div>
                    <div className="nameA">
                            Earn Money
                            <ul>
                                <li><a href="#">Affiliate</a></li>
                                <li><a href="#">Become Partner</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;