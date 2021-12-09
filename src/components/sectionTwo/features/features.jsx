import './features.style.css'
import Image from '../../images'
function Features(props) {

    return (
        <>
            <div className="f-text">
                <h3 className={props.styleText}>{props.h3}</h3>
                <p>{props.p}</p>
            </div>
        </>
    )

}

export default Features;