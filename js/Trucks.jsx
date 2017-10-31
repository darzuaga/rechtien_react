import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Trucks = () => {
    return(
        <div className='uk-height-1-1'>

            <Nav />

            <div className="uk-grid">

                <div className="pages_hero_img_container">
                    <div className="hero_img_container_img">
                        <img src={`/public/img/truck_header_wallpaper.jpg`} />
                    </div>
                </div>

                <div className="uk-width-1-5"></div>
                <div className="uk-width-4-5 trucks_list_container">

                    <div className="uk-card uk-card-default uk-card-body trucks_card_container">
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
                                <span className="uk-label">WORKSTAR 7400 SBA</span>
                                <span className="uk-label">2017</span>
                            </div>
                        </div>

                        <button className="uk-button uk-button-primary truck_view_details_btn">
                            View
                        </button>

                    </div>

                    <div className="uk-card uk-card-default uk-card-body trucks_card_container">
                        <div className="truck_card_img_container">
                            <img src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/05/x1_10-265x190.jpg" />
                        </div>

                        <div className="truck_card_main_container">
                            <div className="truck_title_container uk-heading-bullet">
                                2017 AUDI A4 PRESTIGE
                            </div>

                            <div className="truck_description_container">
                                <p>The BMW X1 compact SUV received some visual changes, especially on the dashboard’s center controls, last year.</p>
                            </div>

                            <div className="truck_labels_container">
                                <span className="uk-label">WORKSTAR 7400 SBA</span>
                                <span className="uk-label">2017</span>
                            </div>
                        </div>

                        <button className="uk-button uk-button-primary truck_view_details_btn">
                            View
                        </button>

                    </div>

                    <div className="uk-card uk-card-default uk-card-body trucks_card_container">
                        <div className="truck_card_img_container">
                            <img src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/05/a7_4-265x190.jpg" />
                        </div>

                        <div className="truck_card_main_container">
                            <div className="truck_title_container uk-heading-bullet">
                                2017 AUDI A4 PRESTIGE
                            </div>

                            <div className="truck_description_container">
                                <p>The BMW X1 compact SUV received some visual changes, especially on the dashboard’s center controls, last year.</p>
                            </div>

                            <div className="truck_labels_container">
                                <span className="uk-label">WORKSTAR 7400 SBA</span>
                                <span className="uk-label">2017</span>
                            </div>
                        </div>

                        <button className="uk-button uk-button-primary truck_view_details_btn">
                            View
                        </button>

                    </div>

                    <div className="uk-card uk-card-default uk-card-body trucks_card_container">
                        <div className="truck_card_img_container">
                            <img src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/05/q3_1-265x190.jpg" />
                        </div>

                        <div className="truck_card_main_container">
                            <div className="truck_title_container uk-heading-bullet">
                                2017 AUDI A4 PRESTIGE
                            </div>

                            <div className="truck_description_container">
                                <p>The BMW X1 compact SUV received some visual changes, especially on the dashboard’s center controls, last year.</p>
                            </div>

                            <div className="truck_labels_container">
                                <span className="uk-label">WORKSTAR 7400 SBA</span>
                                <span className="uk-label">2017</span>
                            </div>
                        </div>

                        <button className="uk-button uk-button-primary truck_view_details_btn">
                            View
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Trucks;
