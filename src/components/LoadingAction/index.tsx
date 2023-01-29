import { Component } from 'react';
import logo from 'assets/imgs/logo.png';
import './style.scss';

interface Props {
    children?: React.ReactElement;
    className?: string;
}
class LoadingAction extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div className={`loading-action ${this.props.className ? this.props.className : ''}`}>
                <div className="logo-loading">
                    <img src={logo} alt="Phoenix" />
                    <div className="spinner"></div>
                </div>
            </div>
        )
    }
}
export default LoadingAction;