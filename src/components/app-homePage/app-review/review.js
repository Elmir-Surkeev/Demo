import './app-review.css';


const Reviews = () =>{
    return(
        <div className="reviews">
            <div className="cards">
                <div className="card">
                <div className="card-info">
                        <div className="card_user">
                            <div className="user-ico"></div>
                            <div className="user-name">
                                Viezh Robert <br/>
                                <p>Warsaw, Poland</p>
                            </div>
                        </div>
                        <div className="card__characters">
                            <div className="card__characters_mark">4.5</div>
                            <div className="star"></div>
                        </div>
                </div>
                <div className="card-desk">
                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                </div>
                </div>
                <div className="card border-another">
                <div className="card-info">
                        <div className="card_user">
                            <div className="user-ico2"></div>
                            <div className="user-name">
                                Yessica Christy<br/>
                                <p>Shanxi, China</p>
                            </div>
                        </div>
                        <div className="card__characters">
                            <div className="card__characters_mark">4.2</div>
                            <div className="star"></div>
                        </div>
                </div>
                <div className="card-desk">
                “I like it because I like to travel far and still can connect with high speed.”.
                </div>
                </div>
                <div className="card border-another">
                <div className="card-info">
                        <div className="card_user">
                            <div className="user-ico3"></div>
                            <div className="user-name">
                            Kim Young Jou<br/>
                                <p>Seoul, South Korea</p>
                            </div>
                        </div>
                        <div className="card__characters">
                            <div className="card__characters_mark">4.1</div>
                            <div className="star"></div>
                        </div>
                </div>
                <div className="card-desk">
                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                </div>
                </div>
            </div>
            <div className="slide">
                <div className="slide-cicrle">
                    <div className="circle special-circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="slide-button">
                        <div className="slide-button-left">
                        &larr;
                        </div>
                        <div className="slide-button-right">
                        &rarr;
                        </div>
                </div>
        </div>
        </div>
    )
}


export default Reviews;