import React from 'react'
import { Link } from 'react-router-dom'

const Trucks = () => {
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

            <div className="uk-grid">

                <div className="pages_hero_img_container">
                    <div className="hero_img_container_img">
                        <img src={`/public/img/truck_header_wallpaper.jpg`} />
                    </div>
                </div>

                <div class="uk-width-1-5"></div>
                <div class="uk-width-4-5 trucks_list_container">

                    <div class="uk-card uk-card-default uk-card-body trucks_card_container">
                        <div className="truck_card_img_container">
                            <img src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/05/a4_5-265x190.jpg" />
                        </div>

                        <div className="truck_card_main_container">
                            <div className="truck_title_container uk-heading-bullet">
                                2017 AUDI A4 PRESTIGE
                            </div>

                            <div className="truck_description_container">
                                <p>The BMW X1 compact SUV received some visual changes, especially on the dashboard’s center controls, last year.</p>
                            </div>

                            <div className="truck_labels_container">
                                <span class="uk-label">WORKSTAR 7400 SBA</span>
                                <span class="uk-label">2017</span>
                            </div>
                        </div>

                        <button class="uk-button uk-button-primary truck_view_details_btn">
                            View
                        </button>

                    </div>

                    <div class="uk-card uk-card-default uk-card-body trucks_card_container">
                        <div className="truck_card_img_container">
                            <img src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/05/a4_5-265x190.jpg" />
                        </div>

                        <div className="truck_card_main_container">
                            <div className="truck_title_container uk-heading-bullet">
                                2017 AUDI A4 PRESTIGE
                            </div>

                            <div className="truck_description_container">
                                <p>The BMW X1 compact SUV received some visual changes, especially on the dashboard’s center controls, last year.</p>
                            </div>

                            <div className="truck_labels_container">
                                <span class="uk-label">WORKSTAR 7400 SBA</span>
                                <span class="uk-label">2017</span>
                            </div>
                        </div>

                        <button class="uk-button uk-button-primary truck_view_details_btn">
                            View
                        </button>

                    </div>

                    <div class="uk-card uk-card-default uk-card-body trucks_card_container">
                        <div className="truck_card_img_container">
                            <img src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/05/a4_5-265x190.jpg" />
                        </div>

                        <div className="truck_card_main_container">
                            <div className="truck_title_container uk-heading-bullet">
                                2017 AUDI A4 PRESTIGE
                            </div>

                            <div className="truck_description_container">
                                <p>The BMW X1 compact SUV received some visual changes, especially on the dashboard’s center controls, last year.</p>
                            </div>

                            <div className="truck_labels_container">
                                <span class="uk-label">WORKSTAR 7400 SBA</span>
                                <span class="uk-label">2017</span>
                            </div>
                        </div>

                        <button class="uk-button uk-button-primary truck_view_details_btn">
                            View
                        </button>

                    </div>

                    <div class="uk-card uk-card-default uk-card-body trucks_card_container">
                        <div className="truck_card_img_container">
                            <img src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/05/a4_5-265x190.jpg" />
                        </div>

                        <div className="truck_card_main_container">
                            <div className="truck_title_container uk-heading-bullet">
                                2017 AUDI A4 PRESTIGE
                            </div>

                            <div className="truck_description_container">
                                <p>The BMW X1 compact SUV received some visual changes, especially on the dashboard’s center controls, last year.</p>
                            </div>

                            <div className="truck_labels_container">
                                <span class="uk-label">WORKSTAR 7400 SBA</span>
                                <span class="uk-label">2017</span>
                            </div>
                        </div>

                        <button class="uk-button uk-button-primary truck_view_details_btn">
                            View
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Trucks;
