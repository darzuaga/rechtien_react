import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Landing = () => {
    return(
        <div className='uk-height-1-1'>

            <Nav />

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
