import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Reacteroids from './Components/Reacteroids/src/Reacteroids.js';
import './App.css';
class NavBar extends Component{
    render(){
        return(
            <nav>
                <Router>
                    <div>
                        <ul>
                            <li><NavLink className="NavLink" to="/">Home</NavLink></li>
                            <li><NavLink className="NavLink" to="/Reacteroids">Reacteroids</NavLink></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Reacteroids" component={Reacteroids}/> 
                </Router>
            </nav>
        )
    }
}
export default NavBar;