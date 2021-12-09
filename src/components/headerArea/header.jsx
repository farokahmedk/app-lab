import React from 'react'
import Images from '../images'
import './header.style.css'
import Button from '../button'

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <a href="#"><img src={Images.mainLogo} alt="" /></a>
                    </div>
                    <div className="menuArea">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">Key Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="button">
                        <Button urlText="#" text="Try for free" />
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;