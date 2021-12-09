import './demoApps.style.css'


const DemoApp = (props) => {

    return (
        <>
            <section>
                <div className="container">
                    <div className={props.className}>
                        <div className="appImgStyle">
                            <img src={props.url} alt={props.alt} />
                        </div>
                        <div className="appImg-heading">
                            <h2>{props.h2}</h2>
                            <p>{props.p}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DemoApp;