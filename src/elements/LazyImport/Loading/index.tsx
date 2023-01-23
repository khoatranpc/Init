import React, { Component } from 'react';
import logo from '../../../assets/imgs/logo.png';
import './style.scss';
class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div className="logo-loading">
                    <img src={logo} alt="Phoenix" />
                    <div className="spinner"></div>
                </div>
            </div>
        )
    }
}
export default Loading;