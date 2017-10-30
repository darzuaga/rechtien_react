import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return(
        <div className='uk-height-1-1'>

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
                                <li className="uk-active"><a href="#">Home</a></li>
                                <li><a href="#">Trucks</a></li>
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

            <div className="hero_img_container">
                <div className="hero_img_container_img">
                    <img src={`/public/img/truck_header_wallpaper.jpg`} />
                </div>
            </div>

            <div class="uk-container landing_container">

                <h1 class="text_heading_container uk-heading-line uk-text-center">
                    <span>How Can We Help You?</span>
                </h1>

                <div class="uk-child-width-1-3 uk-grid-small" uk-grid='true'>
                    <div className="landing_services_card">
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 class="uk-card-title">Default</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="landing_services_card">
                        <div class="uk-card uk-card-primary uk-card-body">
                            <h3 class="uk-card-title">Primary</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="landing_services_card">
                        <div class="uk-card uk-card-secondary uk-card-body">
                            <h3 class="uk-card-title">Secondary</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Landing;
