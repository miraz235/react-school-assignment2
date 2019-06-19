import React from 'react';
import Auth from '../contexts/Auth';

const LoginButton  = (props) => {
    return (
        <>
            <Auth>
                {
                    (context) => {
                        return context.state.isloggedin ? 
                            <div>{context.state.user ? `Welcome ${context.state.user}` : ''} 
                                <button className="button" onClick={() => context.updateAuthState(false)}>Logout</button></div> : 
                            <button className="button" onClick={context.showModal}>Login</button>
                    }
                }
            </Auth>         
        </>
    )
}
export default LoginButton; 