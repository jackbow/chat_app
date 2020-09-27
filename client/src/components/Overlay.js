import {Component} from "react";
import React from "react";
import Input from './Input.js';
import '../styles/gradients.css';

class Overlay extends Component {
    state = {
        display: true,
    }
    setName = (name) => {
        this.setState({
            display: false,
        })
        this.props.setName(name);
    }
    render() {
        if (this.state.display) {
            return(
                <div className="name-div">
                    <p className="header z-10">Chat!</p>
                    <Input submit={this.setName} inputText="Enter your name" buttonText="Go!"
                        focus={true}
                        inputStyle="round-left center-text name-input z-10"
                        buttonStyle="name-btn round-right z-10" />
                </div> 
            );
        }
        else {
            return(null);
        }
    }
}

export default Overlay;