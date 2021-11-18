import React from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {Navbar, NavbarToggler, Collapse, Nav, NavItem, NavbarText} from 'reactstrap';
import './style.css'

import {logout} from "../../service/user.service"

const avatar = 'https://p.kindpng.com/picc/s/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png'

class NavBar extends React.Component {
    render() {
        const { products } = this.props
        const {image, firstName, lastName} = products

        return (
            <div>
                <Navbar color="dark" container="md" dark expand fixed="top">
                    <Link className="link mr-5" to="/">TODO List</Link>
                    <NavbarToggler onClick={function noRefCheck() {
                    }}/>
                    <Collapse navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                            </NavItem>
                        </Nav>
                        <NavbarText className="mr-3">
                            Here is what your day looks like!
                        </NavbarText>
                        <Link className="link" to="/create"> Create New Task
                        </Link>
                    </Collapse>
                    <div className="mr-5 name">
                        <h5 className="name">{firstName? firstName: ""}</h5>
                        <h5 className="name">{lastName? lastName: ""}</h5>
                    </div>
                    <div className="btn-group mr-2">

                        <button type="button" className="btn btn-success dropdown-toggle link" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                         Account
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/account" className="dropdown-item">Account</Link>
                            <Link to="/avatar" className="dropdown-item">Loading avatar</Link>
                        </div>
                    </div>
                    <div>
                        <img src={image ? image : avatar}
                             alt="avatar"
                             width="50"
                             height="50"
                             className="img-thumbnail mr-3"/>
                    </div>
                    <Link to="/"><button className=" btn btn-light link" onClick={() => logout()}>Sign out</button></Link>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = ({productList: {products, loading, error}}) => {
    return {products, loading, error};
};

export default connect(mapStateToProps, null)(NavBar);
