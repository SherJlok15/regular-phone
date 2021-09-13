import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
	Redirect
} from "react-router-dom";

import { Home, FullProduct, AddProduct } from './pages'
import { NavBar } from './components'

function App() {
  return (
    <div className="App">
			<div className="container">
			<Router>
			<NavBar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/add" component={AddProduct}/>
					<Route exact path="/:id" component={FullProduct}/>
					<Redirect to="/" />
				</Switch>
			</Router>
			</div>
    </div>
  );
}

export default App;
