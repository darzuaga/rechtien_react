import React, { Component } from 'react'
import Nav from './Nav'
import {connect} from 'react-redux'
import {change_active_truck_img} from './actionCreators'

class Details extends Component {

    componentWillMount(){
        let payload = {
            truck_id: this.props.match.params.id,
            active_img_index: 0
        }
        this.props.change_active_truck_img(payload)
    }

    render(){
        return(
            <div className='uk-height-1-1'>
                <Nav />

                {this.props.trucks.filter(truck => truck.id == this.props.match.params.id).map(truck => {
                    return(
                        <div className="truck_container">
                            <div className="uk-grid">

                                <div className="pages_hero_img_container">
                                    <div className="hero_img_container_img">
                                        <img src={`/public/img/truck_header_wallpaper.jpg`} />
                                    </div>
                                </div>


                                <div className="uk-width-1-1">
                                    <div className="uk-card uk-card-default uk-card-body no_shadow no_padding_bottom no_padding_top">
                                        <h1 class="uk-heading-bullet">{truck.title}</h1>
                                    </div>
                                </div>


                                <div className="uk-width-3-5">
                                    <div className="uk-card uk-card-default uk-card-body no_shadow">

                                        <div className="details_active_img_container">
                                            <img src={this.props.active_truck_img} />
                                        </div>

                                        <div className="uk-grid details_thumb_imgs_container">
                                            {truck.images.map((truck_img_url, index) => {
                                                return(
                                                    <div className="uk-width-1-5" key={index}>
                                                        <img src={truck_img_url} onClick={() => this.props.change_active_truck_img({truck_id: truck.id, active_img_index: index})}/>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </div>
                                </div>

                                <div className="uk-width-2-5 no_padding_left">
                                    <div className="uk-card uk-card-default uk-card-body no_shadow no_padding_left">
                                        <ul className="uk-list uk-list-divider no_padding_left truck_prop_list_ul_container">
                                            <li>
                                                <span className="trucks_card_list_item_title">Truck Number</span>
                                                <span className="trucks_card_list_item_data">{truck.truck_number}</span>
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

                                            <li>
                                                <span className="trucks_card_list_item_title">Transmission</span>
                                                <span className="trucks_card_list_item_data">{truck.transmission}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">New Or Used</span>
                                                <span className="trucks_card_list_item_data">{truck.condition}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Exterior Color</span>
                                                <span className="trucks_card_list_item_data">{truck.exterior_color}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Vin Number</span>
                                                <span className="trucks_card_list_item_data">{truck.vin_number}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Truck Type</span>
                                                <span className="trucks_card_list_item_data">{truck.truck_type}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Categories</span>
                                                <span className="trucks_card_list_item_data">{truck.categories}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Engine</span>
                                                <span className="trucks_card_list_item_data">{truck.engine}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Engine MFR</span>
                                                <span className="trucks_card_list_item_data">{truck.engine_mfr}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Horse Power</span>
                                                <span className="trucks_card_list_item_data">{truck.horse_power}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Fuel Type</span>
                                                <span className="trucks_card_list_item_data">{truck.fuel_type}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Suspension</span>
                                                <span className="trucks_card_list_item_data">{truck.suspension}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Tires</span>
                                                <span className="trucks_card_list_item_data">{truck.tires}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Wheels</span>
                                                <span className="trucks_card_list_item_data">{truck.wheels}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Wheel Base</span>
                                                <span className="trucks_card_list_item_data">{truck.wheel_base}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Number Of Rear Axels</span>
                                                <span className="trucks_card_list_item_data">{truck.num_of_rear_axels}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Brakes</span>
                                                <span className="trucks_card_list_item_data">{truck.brakes}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Cab</span>
                                                <span className="trucks_card_list_item_data">{truck.cab}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Drive Side</span>
                                                <span className="trucks_card_list_item_data">{truck.drive_side}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">GVW</span>
                                                <span className="trucks_card_list_item_data">{truck.gvw}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Drive</span>
                                                <span className="trucks_card_list_item_data">{truck.drive}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">Mileage</span>
                                                <span className="trucks_card_list_item_data">{truck.mileage}</span>
                                            </li>

                                            <li>
                                                <span className="trucks_card_list_item_title">All Inventory Truck</span>
                                                <span className="trucks_card_list_item_data">{truck.all_inventory_truck}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="uk-grid no_margin_top">
                                <div className="uk-width-1-1">
                                    <div className="uk-card uk-card-default uk-card-body no_shadow no_padding_top">
                                        <ul uk-tab="true">
                                            <li><a href="#">Truck Overview</a></li>
                                            <li><a href="#">Features & Options</a></li>
                                            <li><a href="#">Other Comments</a></li>
                                        </ul>

                                        <ul className="uk-switcher uk-margin">
                                            <li>{truck.overview}</li>
                                            <li>{truck.features_and_options}</li>
                                            <li>{truck.comments}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        trucks: state.trucks,
        active_truck_img: state.active_truck_img
    }
}

const mapDispatchToProps = dispatch => ({
    change_active_truck_img(params){
        dispatch(change_active_truck_img(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);
