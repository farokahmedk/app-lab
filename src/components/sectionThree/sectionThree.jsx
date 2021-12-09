import './sectionThree.Style.css'
import DemoApp from './demoApps'
import Images from '../images'

const SectionThree = (props) => {

    return (
        <>
            <section>
                <div className="sectionTop">
                    <h2>Why you should choose <br /> our app</h2>
                    <p>The rise of mobile devices transforms the way we consume information entirely <br /> and the world's most elevant channels such as Facebook.</p>
                </div>
                <div className="sectionMiddle">
                    <DemoApp className="appImg" h2="App Development" p="Get your blood tests delivered at home collect a sample from the news your blood tests." url={Images.icon1} alt="demo" />
                    <DemoApp className="appImg" h2="10 Times Award" p="Get your blood tests delivered at home collect a sample from the news your blood tests." url={Images.icon2} alt="demo" />
                    <DemoApp className="appImg" h2="Cloud Storage" p="Get your blood tests delivered at home collect a sample from the news your blood tests." url={Images.icon3} alt="demo" />
                    <DemoApp className="appImg" h2="Customization" p="Get your blood tests delivered at home collect a sample from the news your blood tests." url={Images.icon4} alt="demo" />
                    <DemoApp className="appImg" h2="UX Planning" p="Get your blood tests delivered at home collect a sample from the news your blood tests." url={Images.icon5} alt="demo" />
                    <DemoApp className="appImg" h2="Customer Support" p="Get your blood tests delivered at home collect a sample from the news your blood tests." url={Images.icon6} alt="demo" />
                </div>
                <div className="sectionBottom">

                </div>
            </section>
        </>
    )
}

export default SectionThree;