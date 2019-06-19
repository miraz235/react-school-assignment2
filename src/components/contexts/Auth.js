import React, {createContext, Component} from 'react';
import LoginModal from '../Login/LoginModal';

const initState = {
    user: '',
    isloggedin: false,
    modalOpen: false
}

const AuthContext = createContext(initState);

export default AuthContext.Consumer;

class AuthController extends Component {
    state = {...initState};

    updateAuthState = (isloggedin, user) => {
        this.setState((prevState) => ({ ...prevState, isloggedin, user }));
    }

    showModal = () => {
        this.setState((prevState) => ({ ...prevState, modalOpen: true }));
    }
    hideModal = () => {
        this.setState((prevState) => ({ ...prevState, modalOpen: false }));
    }

    render() {
        return (
            <AuthContext.Provider value={{state: this.state, updateAuthState: this.updateAuthState, showModal: this.showModal, hideModal: this.hideModal}}>
                {this.props.children}
                <LoginModal open={this.state.modalOpen} hide={this.hideModal} show={this.showModal} />
            </AuthContext.Provider>
        )
    }
}

export const AuthProvider = AuthController;