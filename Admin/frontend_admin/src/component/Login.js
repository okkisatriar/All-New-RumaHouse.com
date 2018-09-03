import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Login extends Component 
{
    render() 
    {
        return (
                <div>
                  <div className="container" style={{marginTop: 200}}>
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                          <center>
                            <div className="panel-heading">
                              <h4 className="panel-title"><b>Dashboard Rumahouse.com</b></h4>
                            </div>
                          </center>
                          <div className="panel-body">
                            <form role="form">
                              <fieldset>
                                <div className="form-group">
                                  <input className="form-control" placeholder="E-mail" name="email" type="email" Value="purwadhika.okki@gmail.com" />
                                </div>
                                <div className="form-group">
                                  <input className="form-control" placeholder="Password" name="password" type="password" Value="Purwadhika" />
                                </div>
                                <Link to="./Dashboard" type="button" className="btn btn-danger btn-block">Login</Link><br/>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
    }
}
export default Login;