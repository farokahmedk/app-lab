import './sectionOne.css'
import Images from '../images'
import Button from '../button'

function SectionOne(props) {
    return (
        <>
            <section className="sectionOne">
                <img src={Images.vector1} alt="" />
                <img className="right-vector" src={Images.vector2} alt="" />
                <div className="container">
                    <div className="left-text">
                        <div className="left-icon-sec">
                            <img src={Images.rightIcon} alt="" />
                            <p>#1 Editiors Choice App of 2020</p>
                        </div>
                        <h1>Best app for your
                            modern lifestyle</h1>
                        <p className="left-text-p">Increase productivity with a simple to-do app. app for <br />
                            managing your personal budgets.</p>
                        <div className="btn1">
                            <Button urlText="#" text="Try for free" />
                        </div>
                        <a className="watch" href="#">Watch demo video</a>
                    </div>
                    <div className="right-mobile">

                        <img src={Images.phone1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionOne;