import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home';
//import {App as Tetris} from 'components/react-tetris/src/containers/index.js';
class NavBar extends Component{
    render(){
        return(
            <nav>
                <Router>
                    <div>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/tetris">Tetris</NavLink></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={Home}/>
                    {/* <Route path="/tetris" component={Tetris}/>  */}
                </Router>
            </nav>
        )
    }
}
export default NavBar;