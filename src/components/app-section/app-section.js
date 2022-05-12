import './app-section.css';

const SecondSection = () => {
    return(
        <div className="sectionn">
            <div className="section__d">
                <div className="section_ico user">

                </div>
                <div className="section__users_name">
                    <div className="amount">90+</div>
                    <div className="name">User</div>
                </div>
            </div>
            <div className="section__d borders">
                <div className="section_ico location">

                </div>
                <div className="section__locations_name">
                    <div className="amount">30+</div>
                    <div className="name">Locations</div>
                </div>
            </div>
            <div className="section__d">
                <div className="section_ico server">

                </div>
                <div className="section__servers_name">
                    <div className="amount">50+</div>
                    <div className="name">Servers</div>
                </div>
            </div>
        </div>
    )
}


export default SecondSection;