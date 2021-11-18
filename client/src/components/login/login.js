import React, {useState} from 'react'
import {Link, withRouter} from "react-router-dom"
import {Button, Modal} from "react-bootstrap";
import './style.css'
import {userService} from "../../service/user.service";
import {validateEmail, validatePassword} from "../app/use-token";
import Spinner from "../spinner";
import ParticlesBg from 'particles-bg';
import Background from './background';



const MyAccount = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email.length===0 || password.length===0){
            return
        }
        const emails = validateEmail(email)
        if(!emails){
            setMessage("Please enter valid email")
            setShow(true)
            return
        }
        const passwd = validatePassword(password)
        if(!passwd){
            setMessage("check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
            setShow(true)
            return
        }
        const body = ({ email, password })
        setLoading(true)
        const user = await userService.myAccount(body, "login")
        if(user.message){
            setMessage(user.message)
            setShow(true)
        }if(user.token){
            await localStorage.setItem("token", JSON.stringify(user))
            setLoading(false)
            props.setToken(user)

        }
    };

    const closeWindow =()=>{
        setShow(false)
    }

    if (loading) {
        return <Spinner />;
    }


    return (
    <div>
        <Background />
        <ParticlesBg type="cobweb" bg={{zIndex: 1,
        position: "absolute", top: 0, left: 0  }} />
        <div className="container py-4 py-lg-5 my-4">
            <Modal className="modal" show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>My Account</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5 className="text-center">{message}</h5>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeWindow}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="row borders">
                <div className="col-md-6 left">
                    <div className="card border-0 box-shadow">
                        <div className="card-body">
                            <div className="py-3">
                                <div className="d-inline-block align-middle">
                                    <a className="social-btn sb-google mr-2 mb-2"
                                    href="http://localhost:5000/auth"
                                    data-toggle="tooltip"
                                    title="true"
                                    data-original-title="Sign in with Google"
                                    >
                                        <span className="blue">G</span> <span className="red">o</span> <span className="yellow">o</span> <span className="blue">g</span> <span className="green">l</span> <span className="red">e</span>
                                        <i className="czi-google"/>
                                    </a>
                                    <h4 className="account d-inline-block align-middle font-size-base font-weight-semibold mb-2 mr-2 text-center">
                                    Account
                                </h4>
                                </div>
                            </div>
                            <h2 className="font-size-base pt-4 pb-2 text-center">Login</h2>
                            <form className="needs-validation" noValidate>
                                <div className="input-group-overlay form-group">
                                    <label htmlFor="reg-email">E-mail Address</label>
                                    <input
                                        className="form-control prepended-form-control"
                                        type="email"
                                        placeholder="Email"
                                        id="emails"
                                        name="email"
                                        required
                                        value={email} onChange={handleEmailChange}
                                    />
                                </div>
                                <div className="input-group-overlay form-group">
                                    <label htmlFor="reg-password">Password</label>
                                    <div className="password-toggle">
                                        <input
                                            className="form-control prepended-form-control"
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            name="password"
                                            required
                                            value={password} onChange={handlePasswordChange}
                                        />
                                        <label className="password-toggle-btn">
                                            <input className="custom-control-input"
                                                   type="checkbox"/>
                                            <i className="czi-eye password-toggle-indicator"/>
                                            <span className="sr-only">Show password</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between">
                                    {/*<div className="custom-control custom-checkbox">*/}
                                    {/*    <input*/}
                                    {/*        className="custom-control-input"*/}
                                    {/*        type="checkbox"*/}
                                    {/*        defaultChecked*/}
                                    {/*        id="remember_me"*/}
                                    {/*    />*/}
                                    {/*    <label className="custom-control-label"*/}
                                    {/*           htmlFor="remember_me">*/}
                                    {/*        Remember me*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}
                                    <Link
                                        className="nav-link-inline font-size-sm"
                                        to="/recovery_password"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <hr className="mt-4"/>
                                <div className="text-right pt-4">
                                    <button className="btn btn-primary" type="submit"
                                            onClick={handleSubmit}>

                                        <i className="czi-sign-in mr-2 ml-n21"/>
                                        Sign In
                                    </button>
                                </div>
                                <div className="d-flex justify-content-around mt-5">

                                    <h5>Don't have an account yet?</h5>

                                    <Link
                                        className="nav-link-inline font-size-sm"
                                        to="/registration"

                                    >
                                        Sing Up
                                    </Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 right">
                <h1>TODO LIST</h1>
                <h4>Achieve your goal <br/> by planning your day!</h4>
                </div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(MyAccount)





