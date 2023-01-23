import { Component } from 'react';
import logo from 'assets/imgs/logo.png';
import './style.scss';

class LoadingAction extends Component {
    render() {
        return (
            <div className="loading-action">
                <div className="logo-loading">
                    <img src={logo} alt="Phoenix" />
                    <div className="spinner"></div>
                </div>
            </div>
        )
    }
}
export default LoadingAction;