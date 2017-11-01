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
                                        <li>
                                            <span className="trucks_card_list_item_title">Stock Number</span>
                                            <span className="trucks_card_list_item_data">{truck.stock_number}</span>
                                        </li>
                                        <li>
                                            <span className="trucks_card_list_item_title">Year</span>
                                            <span className="trucks_card_list_item_data">{truck.year}</span>
                                        </li>
                                        <li>
                                            <span className="trucks_card_list_item_title">Make</span>
                                            <span className="trucks_card_list_item_data">{truck.make}</span>
                                        </li>
                                        <li>
                                            <span className="trucks_card_list_item_title">Model</span>
                                            <span className="trucks_card_list_item_data">{truck.model}</span>
                                        </li>
                                    </ul>

                                    <ul class="uk-list uk-list-divider trucks_card_props_list">
                                        <li>
                                            <span className="trucks_card_list_item_title">Vin Number</span>
                                            <span className="trucks_card_list_item_data">{truck.vin_number}</span>
                                        </li>
                                        <li>
                                            <span className="trucks_card_list_item_title">Engine Mfr</span>
                                            <span className="trucks_card_list_item_data">{truck.engine_mfr}</span>
                                        </li>
                                        <li>
                                            <span className="trucks_card_list_item_title">GVW</span>
                                            <span className="trucks_card_list_item_data">{truck.gvw}</span>
                                        </li>
                                        <li>
                                            <span className="trucks_card_list_item_title">Milage</span>
                                            <span className="trucks_card_list_item_data">{truck.milage}</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link className="uk-button uk-button-primary truck_view_details_btn" to={`/details/${truck.id}`}>
                                    View
                                </Link>
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
