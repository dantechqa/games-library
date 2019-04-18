import React, {Component} from 'react';
import './App.css';
import * as constants from './constants';
import Display from './components/Display';
class NavBar extends Component{
    render(){
        return (
            <div>
                <Display name="ColourFood" url={constants.gameURL}/>
            </div>
        )
    }
}
export default NavBar;