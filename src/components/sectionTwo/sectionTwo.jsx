import './sectionTwo.style.css'
import Image from '../images'
import Features from './features/features'
import Button from '../button'

function sectionTwo() {
    return (
        <>
            <div className="sectionTwo">
                <div className="container">
                    <p className="sectionTwo-p">Trusted by companies like</p>
                    <div className="co-images">
                        <ul>
                            <li><img src={Image.companyOne} alt="" /></li>
                            <li><img src={Image.companyTwo} alt="" /></li>
                            <li><img src={Image.companyThree} alt="" /></li>
                            <li><img src={Image.companyFour} alt="" /></li>
                            <li><img src={Image.companyFive} alt="" /></li>
                        </ul>
                    </div>
                    <div className="sTwoPhoneArea">
                        <div className="sTwoPhone">
                            <img src={Image.phone2} alt="" />
                        </div>
                        <div className="sTwoText">
                            <div className="sTwoTextH">
                                <h2>Awesome apps <br /> feature</h2>
                                <p>Increase productivity with a simple to-do app. app for
                                    managing your personal budgets.</p>
                                <div className="f-right">
                                    <div className="features">
                                        <div className="f-img">
                                            <img src={Image.icon1} alt="" />
                                        </div>
                                    </div>
                                    <Features h3="Fast Performance" p="Get your blood tests delivered at home collect a sample from the news your blood tests." />
                                </div>
                                <div className="f-right">
                                    <div className="features">
                                        <div className="f-img">
                                            <img src={Image.icon2} alt="" />
                                        </div>
                                    </div>
                                    <Features styleText="h3-blue" h3="Prototyping" p="Get your blood tests delivered at home collect a sample from the news your blood tests." />
                                </div>
                                <div className="f-right">
                                    <div className="features">
                                        <div className="f-img">
                                            <img src={Image.icon3} alt="" />
                                        </div>
                                    </div>
                                    <Features h3="Vector Editing" p="Get your blood tests delivered at home collect a sample from the news your blood tests." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="someText">
                        <div className="someTextLeft">
                            <h2>Smart jackpots that <br />
                                you may love this <br />
                                anytime & anywhere</h2>
                        </div>
                        <div className="vr">

                        </div>
                        <div className="someTextRight">
                            <p>The rise of mobile devices transforms the way we <br />
                                consume information entirely and the world's most <br />
                                elevant channels such as Facebook.</p>
                        </div>
                    </div>
                    <div className="centerClass">

                        <div className="f-right featuresBottom">
                            <div className="features features2">
                                <div className="f-img">
                                    <img src={Image.icon4} alt="" />
                                </div>
                            </div>
                            <Features h3="Automatic Payouts" p="Get your blood tests delivered at home collect a sample from the news your blood tests." />
                        </div>
                        <div className="f-right featuresBottom">
                            <div className="features features2">
                                <div className="f-img">
                                    <img src={Image.icon5} alt="" />
                                </div>
                            </div>
                            <Features h3="Network Effect" p="Get your blood tests delivered at home collect a sample from the news your blood tests." />
                        </div>
                        <div className="f-right featuresBottom">
                            <div className="features features2">
                                <div className="f-img">
                                    <img src={Image.icon6} alt="" />
                                </div>
                            </div>
                            <Features h3="Bigger Rewards Method" p="Get your blood tests delivered at home collect a sample from the news your blood tests." />
                        </div>

                    </div>
                    <div className="empty"></div>
                    <div className="design-area">
                        <div className="design-img">
                            <img src={Image.socialImage} alt="" />
                        </div>
                        <div className="design-text">
                            <h2>Designed & built by <br />
                                the latest code <br />
                                integration</h2>
                            <p>The rise of mobile devices transforms the way we <br />
                                consume information entirely and the world's most <br />
                                elevant channels such as Facebook.</p>
                            <Button urlText="#" text="Learn more" />
                        </div>
                    </div>

                </div>
                <hr />
            </div>

        </>
    )
}

export default sectionTwo;