import React from "react"
import Auth from '../contexts/Auth';

const LoginForm = ({onClose}) => {
    return (
        <Auth>
            { 
                (context) => {
                    return (
                        <div>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={onClose}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form name="loginform" onSubmit={(e) => {
                                    e.preventDefault();
                                    context.updateAuthState(true, document.loginform.username.value);
                                    onClose()
                                }}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                        <input type="text" className="form-control" id="recipient-name" name="username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-password" className="col-form-label" name="password">Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="recipient-password"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="button">Login</button>
                                </div>
                            </form>
                        </div>
                    )
                }
            }
        </Auth>
    )
}

export default LoginForm