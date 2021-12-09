
import './button.style.css'

function Button(props) {
    return (
        <>
            <a className="btn" href={props.urlText}>{props.text}</a>
        </>
    )
}

export default Button;