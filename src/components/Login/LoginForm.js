import React from "react"

const LoginForm = ({onClose}) => {
    return (
        <div>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Login
                    </h5>
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
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                        <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient-password" className="col-form-label">Password:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-password"
                        />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="button">
                    Login
                    </button>
            </div>
        </div>
    )
}

export default LoginForm