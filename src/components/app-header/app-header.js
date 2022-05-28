import './app-header.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import HomePage from '../app-homePage/app-homePage'
import {About} from '../app-about/app-about';
import {Default} from '../app-default/app-default';
function AppHeader(){
    
    return(
    <>
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
                        <NavLink to='./app-about'><li>About</li></NavLink>
                        {/* <a href="#"><li>Features</li></a>
                        <a href="#"><li>Pricing</li></a> */}
                        <NavLink to="./app-default"><li>Default</li></NavLink>
                        <NavLink to= '/'><li>Home</li></NavLink>
                        {/* <Routes>
                            <Route path='/app-about' element={<About/>} />
                            <Route path='/app-default' element={<Default/>} />
                            <Route path='/' element={<HomePage/>} />
                        </Routes> */}
                        
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
    </>
    )
}


export default AppHeader;