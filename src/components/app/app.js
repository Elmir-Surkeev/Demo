import './app.css';
import AppHeader from '../app-header/app-header';
import Footer from '../app-footer/app-footer';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from '../app-homePage/app-homePage'
import {About} from '../app-about/app-about';
import {Default} from '../app-default/app-default';
const App = () => {
    return(
        <div className="app">
            <AppHeader/>
        <Routes>
            <Route path='/app-about' element={<About/>} />
            <Route path='/app-default' element={<Default/>} />
            <Route path='/' element={<HomePage/>} />
        </Routes>
            <Footer/>
        </div>
    )
}

export default App;