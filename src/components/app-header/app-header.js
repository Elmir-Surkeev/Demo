import './app-header.css';

const AppHeader = () =>{
    return(
        <div className="header">
            <div className="left-header">
                <div className="left-header-ico">
                </div>
                <div className="left-header-logo">
                    Lasles<span>VPN</span>
                </div>
            </div>
            <div className="center-header">
                <div className="nav">
                    <ul>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Features</li></a>
                        <a href="#"><li>Pricing</li></a>
                        <a href="#"><li>Testimonials</li></a>
                        <a href="#"><li>Help</li></a>
                    </ul>
                </div>
            </div>
            <div className="right-header">
                <div className="sign-in">
                    Sign In
                </div>
                <div className="sign-up">
                    Sign Up
                </div>
            </div>
        </div>
    )
}


export default AppHeader;