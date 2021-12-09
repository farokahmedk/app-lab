import './heading.style.css'
import classNames from 'classnames'

const HeadingLeft = (props) => {
    let Default = classNames('heading-style')
    let customStyle = props.className

    let HeadingStyle

    if (customStyle !== undefined) {
        HeadingStyle = customStyle
    }
    else {
        HeadingStyle = Default
    }


    return (
        <>
            <div className={HeadingStyle}>
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </>
    )
}

export default HeadingLeft;