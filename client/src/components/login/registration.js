import React, {useState} from 'react'
import {Link } from "react-router-dom"
import {Button, Modal} from "react-bootstrap";
import './style.css'
import {userService} from "../../service/user.service";
import {validateEmail, validatePassword} from "../app/use-token";
import ParticlesBg from 'particles-bg';
import Background from './background';


const Registration =(props)=> {

    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setCPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e)=>{
        setCPassword(e.target.value)
    }

    const onSubmits = async (e) => {
        e.preventDefault()
        if (password !== passwordC) {
            setShow(true)
            setText("Passwords Doesn't Match")

        }
        if(email.length===0 || password.length===0){
            return
        }
        const emails = validateEmail(email)
        if(!emails){
            setText("Please enter valid email")
            setShow(true)
            return
        }
        const passwd = validatePassword(password)
        if(!passwd){
            setText("check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
            setShow(true)
            return
        }
        if (email && password === passwordC) {
            const body = ({ email, password })
            const user = await userService.myAccount(body, "registration")
            if(user.message){
                setText(user.message)
                setShow(true)
            }if(user.token){
                await localStorage.setItem("token", JSON.stringify(user))
                props.setToken(user)
            }
        }
    }

    const handleClose = () => {
        setShow(false)
    }

        return (
        <div className="registration">
            <Background />
            <ParticlesBg type="square" bg={{zIndex: 1,
            position: "absolute", top: 0, left: 0  }} />
            <div className="container py-4 py-lg-5 my-4">

                <Modal className="modal" show={show}>
                    <Modal.Header closeButton onClick={handleClose}>
                        <Modal.Title>My Account</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h5 className="text-center">{text}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="row borders">
                    <div className="left col-md-6 pt-4 mt-3 mt-md-0 signUp-left">
                        <div className="py-3">
                           
                            <div className="d-inline-block align-middle">
                                <a className="social-btn sb-google mr-2 mb-2"
                                   href="http://localhost:5000/auth"
                                   data-toggle="tooltip"
                                   title="true"
                                   data-original-title="Sign in with Google"
                                >  <span className="blue">G</span> <span className="red">o</span> <span className="yellow">o</span> <span className="blue">g</span> <span className="green">l</span> <span className="red">e</span>
                                    <i className="czi-google"/>
                                </a>
                                <h4
                                className="account d-inline-block align-middle font-size-base font-weight-semibold mb-2 mr-2 text-center">
                                Account
                            </h4>
                            </div>
                        </div>
                        <h2 className="h4 mb-3 text-center">No account?</h2>
                        <h2>Sign up</h2>
                        <p className="font-size-sm text-muted mb-4">
                            Registration takes less than a minute but gives you full control
                            over
                            your to do list.
                        </p>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="reg-email">E-mail Address</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter valid email address!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="reg-password">Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="reg-password"
                                            name="password"
                                            required
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <div className="invalid-feedback">Please enter password!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="reg-password-confirm">Confirm
                                            Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="reg-confirmPassword"
                                            name="confirmPassword"
                                            required
                                            value={passwordC}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                        {password !== passwordC ?
                                            <div className="invalid-feedback">Passwords do not
                                                match!
                                            </div>
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <button className="btn btn-primary btn-reg" type="submit"
                                        onClick={onSubmits}>
                                    <i className="czi-user mr-2 ml-n1"/>
                                    Sign Up
                                </button>
                            </div>
                            <div className="d-flex justify-content-around mt-5">
                                <h5>Have you account?</h5>
                                <Link className="nav-link-inline font-size-sm"
                                    to="/">
                                    Sing In
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="right col-md-5">
                        <h1>TODO LIST</h1>
                        <h4>Achieve your goal <br/> by planning your day!</h4>
                    </div>
                </div>
            </div>
        </div>
        )
}


export default Registration





