import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav className="nav_bar nav_bar-green bg-blue">
                <a href="" className="text-yellow">
                    {this.props.title}
                </a>
            </nav>
        )
    }
}

export default Navigation;