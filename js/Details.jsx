import React from 'react'
import Nav from './Nav'

const Details = () => {
    return(
        <div className='uk-height-1-1'>
            <Nav />

            <div className="uk-grid">

                <div className="pages_hero_img_container">
                    <div className="hero_img_container_img">
                        <img src={`/public/img/truck_header_wallpaper.jpg`} />
                    </div>
                </div>


                <div className="uk-width-1-1">
                    <div className="uk-card uk-card-default uk-card-body no_shadow no_padding_bottom no_padding_top">
                        <h1 class="uk-heading-bullet">Heading Bullet</h1>
                    </div>
                </div>


                <div className="uk-width-3-5">
                    <div className="uk-card uk-card-default uk-card-body no_shadow">

                        <div className="details_active_img_container">
                            <img src={`/public/img/truck_header_wallpaper.jpg`} />
                        </div>

                        <div className="uk-grid details_thumb_imgs_container">
                            <div className="uk-width-1-5">
                                <img src={`/public/img/truck_header_wallpaper.jpg`} />
                            </div>

                            <div className="uk-width-1-5">
                                <img src={`/public/img/truck_header_wallpaper.jpg`} />
                            </div>

                            <div className="uk-width-1-5">
                                <img src={`/public/img/truck_header_wallpaper.jpg`} />
                            </div>

                            <div className="uk-width-1-5">
                                <img src={`/public/img/truck_header_wallpaper.jpg`} />
                            </div>

                            <div className="uk-width-1-5">
                                <img src={`/public/img/truck_header_wallpaper.jpg`} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="uk-width-2-5 no_padding_left">
                    <div className="uk-card uk-card-default uk-card-body no_shadow no_padding_left">
                        <ul className="uk-list uk-list-divider no_padding_left">
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                            <li>List item 3</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="uk-grid no_margin_top">
                <div className="uk-width-1-1">
                    <div className="uk-card uk-card-default uk-card-body no_shadow no_padding_top">
                        <ul uk-tab="true">
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>

                        <ul className="uk-switcher uk-margin">
                            <li>
                                The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5. It seats up to five and comes with a 200-horsepower, turbocharged 2.0-liter four-cylinder engine. It is available with front- or all-wheel drive. Rivals in the growing field of small, premium SUVs include the Acura RDX, BMW X1, Buick Encore and Mercedes-Benz GLA-Class.
                            </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
