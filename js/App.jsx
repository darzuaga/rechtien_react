import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Trucks from './Trucks'
import Details from './Details'

const App = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <div className="app uk-height-1-1">
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route path='/trucks' component={Trucks} />
                        <Route path='/details/:id' component={Details} />
                    </Switch>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
