import React, { Component } from 'react'
import {Link, Route } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-right navbar-expand-lg navbar-dark bg-primary fixed-top">
                <a className="navbar-brand" href="/">RumaHouse</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <Link to ="/Products" className="nav-link">Products</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" style={{marginLeft: 300}}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to= "/Login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Register" className="nav-link">Register</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/Cart">Cart</a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to= "/Profile" className="dropdown-item">My Profile</Link>
                                <Link to= "/Dashboard" className="dropdown-item">Dashboard</Link>
                                <Link to= "/Wishlist" className="dropdown-item">Wishlist</Link>
                                <Link to="/Logout" className="dropdown-item">Log out</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
  }
}
export default Header;