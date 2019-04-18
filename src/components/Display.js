import React, { Component } from 'react';
const image = require.context('../images/', true);
class NavBar extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            url: this.props.url,
        }
    }

    getImage() {
        return image('./${this.state.name}.jpg');
    }

    render(){
        return (
                <a className="Item" target="_blank" href={this.state.url}>
                <img className={this.state.name} src={this.getImage} />
                {this.state.name}
                </a>
        )
    }
}
export default NavBar;