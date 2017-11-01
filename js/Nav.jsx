import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return(

        <div className="uk-position-relative navbar_container">
            <div className="uk-position-top">
                <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
                    <div className="uk-navbar-left">

                        <div className="header_logo_container">
                            <img src={`/public/img/logo_rechtien.png`} />
                        </div>

                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><Link to={`/`}>Home</Link></li>
                            <li><Link to={`/trucks`}>Trucks</Link></li>
                            <li><a href="#">Tow Trucks</a></li>
                            <li><a href="#">Leasing/Rental</a></li>
                            <li><a href="#">Parts</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li>
                                <a href="#">Parent</a>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li className="uk-nav-header">Header</li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li className="uk-nav-divider"></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default Nav;
