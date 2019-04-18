import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Reacteroids from './components/reacteroids/src/Reacteroids.js';
import './App.css';
import styles from './components/reacteroids/src/style.css';
class NavBar extends Component{
    render(){
        return(
            <nav>
                <Router>
                    <div>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink style={styles} to="/Reacteroids">Reacteroids</NavLink></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Reacteroids" component={Reacteroids}/> 
                </Router>
            </nav>
        )
    }
    // test line
}
export default NavBar;