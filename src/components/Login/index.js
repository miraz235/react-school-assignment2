import React, {Component} from 'react';
import LoginModal from './LoginModal';

class Login extends Component {
    state = { 
        open: false,
        loggedin: false
    };
    show = () => {
        this.setState({ open: true });
    }
    hide = () => {
        this.setState({ open: false });
    }
    logout = () => {
        this.setState({ loggedin: false });
    }
    getButton = () => {
        return this.state.loggedin ? 
                    <button className="button" onClick={this.logout}>Logout</button> : 
                    <button className="button" onClick={this.show}>Login</button>
    }
    render() {
        return (
            <>
                { this.getButton() }               
                <LoginModal open={this.state.open} hide={this.hide} show={this.show} />
            </>
        )
    }
}
export default Login; 