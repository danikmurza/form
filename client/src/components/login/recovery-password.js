import React from 'react'
import {userService} from "../../service/user.service";
import {connect} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import {validateEmail} from "../app/use-token";

class RecoveryPassword extends React.Component {

  state = {
    email: '',
    message: '',
    show: false,
    text: '',
  }

  recover = async (e) => {
    e.preventDefault()
    const emails = validateEmail(this.state.email)
    if(!emails){
      this.setState({
        message: "Please enter valid email",
        show:true})
      return
    }
   const recovery = await userService.update(this.state, 'POST',"recovery")
    this.setState({email: ''})
    if(recovery.message){
      this.setState({message: recovery.message, show:true})
    }
  }

  handleClose = () =>{
    this.setState({show: false})
     this.props.history.push('/')
  }

  render() {
    const {show, message } = this.state
    if( message){
      return (
          <Modal className="modal" show={show}>
            <Modal.Header closeButton onClick={this.handleClose}>
              <Modal.Title>My Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <h5 className="text-center">{this.state.message}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
    )
    }
  return (
      <div className="container py-4 py-lg-5 my-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h2 className="h3 mb-4">Forgot your password?</h2>
          <p className="font-size-md">
            Change your password in three easy steps. This helps to keep your
            new
            password secure.
          </p>
          <ol className="list-unstyled font-size-md">
            <li>
              <span className="text-primary mr-2">1.</span>Fill in your email
              address below.
            </li>
            <li>
              <span className="text-primary mr-2">2.</span>We'll email you a
              temporary code.
            </li>
            <li>
              <span className="text-primary mr-2">3.</span>Use the code to
              change
              your password on our secure website.
            </li>
          </ol>
          <div className="card py-2 mt-4">
            <form className="card-body needs-validation" noValidate>
              <div className="form-group">
                <label htmlFor="recover-email">Enter your email address</label>
                <input
                  className="form-control"
                  type="email"
                  id="recover-email"
                  value={this.state.email}
                  onChange={(e)=> this.setState({email: e.target.value})}
                  required
                />
                <div className="invalid-feedback">
                  Please provide valid email address.
                </div>
              </div>
              <button className="btn btn-primary" type="submit" onClick={this.recover}>
                Get new password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
}

const mapStateToProps = ({productList: {products, loading, error, errorBool}}) => {
  return {products, loading, error, errorBool}
}

export default connect(mapStateToProps, null)(RecoveryPassword)
