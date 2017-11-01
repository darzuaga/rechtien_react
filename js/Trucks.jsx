import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import {connect} from 'react-redux'

const Trucks = (props) => {

    return(
        <div className='uk-height-1-1'>

            <Nav />

            <div className="uk-grid">

                <div className="pages_hero_img_container">
                    <div className="hero_img_container_img">
                        <img src={`/public/img/truck_header_wallpaper.jpg`} />
                    </div>
                </div>

                <div className="uk-width-1-5 trucks_search_filter_container">

                    <div className="">

                        <div className="">
                            <h3>SEARCH</h3>
                        </div>

                        <div className="">

                            <form>
                                <select className="uk-select car_filter_select_container">
                                    <option>Year</option>
                                </select>

                                <select className="uk-select car_filter_select_container">
                                    <option>Make</option>
                                </select>

                                <select className="uk-select car_filter_select_container">
                                    <option>Model</option>
                                </select>

                                <select className="uk-select car_filter_select_container">
                                    <option>GVW</option>
                                </select>

                                <select className="uk-select car_filter_select_container">
                                    <option>Engines</option>
                                </select>

                                <select className="uk-select car_filter_select_container">
                                    <option>Milage</option>
                                </select>

                                <select className="uk-select car_filter_select_container">
                                    <option>Price</option>
                                </select>

                                <select className="uk-select car_filter_select_container">
                                    <option>Category</option>
                                </select>
                            </form>

                        </div>

                    </div>
                </div>

                <div className="uk-width-4-5 trucks_list_container">

                    {props.trucks.map((truck, index) => {
                        return(
                            <div key={index} className="uk-card uk-card-default uk-card-body trucks_card_container">
                                <div className="truck_card_img_container uk-height-1-1">
                                    <img src={truck.img_url} />
                                </div>

                                <div className="truck_card_main_container">
                                    <div className="truck_title_container uk-heading-bullet">
                                        {truck.title}
                                    </div>

                                    <div className="truck_description_container">
                                        <p>{truck.description}</p>
                                    </div>

                                    <ul class="uk-list uk-list-divider trucks_card_props_list">
                                        <li>List item 1</li>
                                        <li>List item 2</li>
                                        <li>List item 3</li>
                                        <li>List item 3</li>
                                    </ul>

                                    <ul class="uk-list uk-list-divider trucks_card_props_list">
                                        <li>List item 1</li>
                                        <li>List item 2</li>
                                        <li>List item 3</li>
                                        <li>List item 3</li>
                                    </ul>
                                </div>

                                <button className="uk-button uk-button-primary truck_view_details_btn">
                                    View
                                </button>
                            </div>
                        )
                    })}

                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trucks: state.trucks
    }
}

export default connect(mapStateToProps)(Trucks);
