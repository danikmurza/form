import React from 'react'
import {Button, Modal} from "react-bootstrap"
import {userService} from "../../service/user.service"
import {connect} from "react-redux"
import './style.css'
import {validatePassword} from "../app/use-token";

class SetNewPassword extends React.Component {

    state = {
        password: '',
        confirmPassword: '',
        show: false,
        text: ''
    }

    componentDidMount() {
        if(this.props.match.params.token){
             localStorage.setItem("token", JSON.stringify(this.props.match.params.token))
        }
    }

    onSubmits = async (e) => {
        e.preventDefault()
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({show: true, text: "Passwords Doesn't Match"})
        }
        const passwd = validatePassword(this.state.password)
        if(!passwd){
            this.setState({
                text:"check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter",
                show: true})
            return
        }
        if (this.state.password === this.state.confirmPassword) {
           const password = await userService.update(this.state, "PUT","password")
            this.setState({text: password.message, show: true})
            setTimeout(()=>this.props.history.push('/'), 4000)
        }
    }

    handleClose = () => {
        this.setState({show: false})
    }


    render() {
        const {show, password, confirmPassword, text } = this.state

        return (
            <div className="container py-4 py-lg-5 my-4">

                <Modal className="modal" show={show}>
                    <Modal.Header closeButton>
                        <Modal.Title>My Account</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h5 className="text-center">{text}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>


                <div className="row borders">
                    <div className="left col-md-6 pt-4 mt-3 mt-md-0">
                        <h2 className="h4 mb-3 text-center">New Password</h2>
                        <p className="font-size-sm text-muted mb-4">
                            New password takes less than a minute but gives you full control
                            over
                            your orders.
                        </p>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="reg-password">New Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="reg-password"
                                            name="password"
                                            required
                                            value={password}
                                            onChange={e => this.setState({password: e.target.value})}
                                        />
                                        <div className="invalid-feedback">Please enter password!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="reg-password-confirm">Confirm New
                                            Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="reg-confirmPassword"
                                            name="confirmPassword"
                                            required
                                            value={confirmPassword}
                                            onChange={e => this.setState({confirmPassword: e.target.value})}
                                        />
                                        {password !== confirmPassword ?
                                            <div className="invalid-feedback">Passwords do not
                                                match!
                                            </div>
                                            : null
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="text-right mb-4">
                                <button className="btn btn-primary" type="submit"
                                        onClick={this.onSubmits}>
                                    <i className="czi-user mr-2 ml-n1"/>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="right col-md-6"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({productList: {products, loading, error}}) => {
    return {products, loading, error}
}

export default connect(mapStateToProps, null)(SetNewPassword)







