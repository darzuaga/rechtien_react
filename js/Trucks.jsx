import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import {connect} from 'react-redux'
import {filterSearchResults} from './actionCreators'
import _ from 'lodash'

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
                                <select className="uk-select car_filter_select_container" data-type="year" onChange={props.filterSearchResults}>
                                    <option>Year</option>
                                    {_.keys(_.groupBy(props.all_results, truck => truck.year)).map(val => <option>{val}</option>)}
                                </select>

                                <select className="uk-select car_filter_select_container" data-type="make" onChange={props.filterSearchResults}>
                                    <option>Make</option>
                                    {_.keys(_.groupBy(props.all_results, truck => truck.make)).map(val => <option>{val}</option>)}
                                </select>

                                <select className="uk-select car_filter_select_container" data-type="model" onChange={props.filterSearchResults}>
                                    <option>Model</option>
                                    {_.keys(_.groupBy(props.all_results, truck => truck.model)).map(val => <option>{val}</option>)}
                                </select>

                                <select className="uk-select car_filter_select_container" data-type="gvw" onChange={props.filterSearchResults}>
                                    <option>GVW</option>
                                    {_.keys(_.groupBy(props.all_results, truck => truck.gvw)).map(val => <option>{val}</option>)}
                                </select>

                                <select className="uk-select car_filter_select_container" data-type="engine" onChange={props.filterSearchResults}>
                                    <option>Engines</option>
                                    {_.keys(_.groupBy(props.all_results, truck => truck.engine)).map(val => <option>{val}</option>)}
                                </select>

                                <select className="uk-select car_filter_select_container" data-type="mileage" onChange={props.filterSearchResults}>
                                    <option>Milage</option>
                                    {_.keys(_.groupBy(props.all_results, truck => truck.mileage)).map(val => <option>{val}</option>)}
                                </select>

                                <select className="uk-select car_filter_select_container" data-type="price" onChange={props.filterSearchResults}>
                                    <option>Price</option>
                                    {_.keys(_.groupBy(props.all_results, truck => truck.price)).map(val => <option>{val}</option>)}
                                </select>

                                <select className="uk-select car_filter_select_container" data-type="categories" onChange={props.filterSearchResults}>
                                    <option>Category</option>
                                    {_.keys(_.groupBy(props.all_results, truck => truck.categories)).map(val => <option>{val}</option>)}
                                </select>
                            </form>

                        </div>

                    </div>
                </div>

                <div className="uk-width-4-5 trucks_list_container">

                    {props.filtered_results.map((truck, index) => {
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
        all_results: state.all_results,
        filtered_results: state.filtered_results
    }
}

const mapDispatchToProps = dispatch => ({
    filterSearchResults(event){
        let payload = {
            filter_type: event.target.dataset.type,
            filter_value: event.target.value
        }
        dispatch(filterSearchResults(payload))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Trucks);
