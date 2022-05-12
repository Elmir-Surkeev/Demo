import './app.css';
import AppHeader from '../app-header/app-header';
import FirstSection from '../app-header/app-section/app-section';
import SecondSection from '../app-section/app-section';
import Section2_1 from '../app-section2/app.section2';
import Title2 from '../app-title2/app-title2';
import ThirdSection from '../app-section3/app-section3';
import Title3 from '../app-title3/app-title2';
import Banner from '../app-banner/app-banner';
import Title4 from '../app-title4/app-title2';
import Reviews from '../app-review/review';
import FourSection from '../app-section4/app-section4';
import Footer from '../app-footer/app-footer'
const App = () => {
    return(
        <div className="app">
            <AppHeader/>
            <FirstSection/>
            <SecondSection/>
            <Section2_1/>
            <Title2/>
            <ThirdSection/>
            <Title3/>
            <Banner/>
            <Title4/>
            <Reviews/>
            <FourSection/>
            <Footer/>
        </div>
    )
}

export default App;