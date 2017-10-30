import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './store'
import Landing from './Landing'
import Trucks from './Trucks'

const App = () => {
    return(
        <BrowserRouter>

                <div className="app uk-height-1-1">
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route path='/trucks' component={Trucks} />
                    </Switch>
                </div>

        </BrowserRouter>
    )
}

export default App;
