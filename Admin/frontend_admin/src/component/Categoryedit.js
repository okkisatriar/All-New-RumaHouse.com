import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Categoryedit extends Component {
    state =
    {
        id: '',
        namacategory: '',
    }

    componentDidMount()
    {
        var id_cate = this.props.location.state.nomor;
        axios.get(`http://localhost:8002/Categoryedit/`+id_cate).then(
            (cateambil) =>
            {
                console.log(cateambil.data);
                this.setState(
                    {
                        id:cateambil.data[0].id,
                        namacategory:cateambil.data[0].nama_category
                    }
                );
            }
        )
    };

   value = (e) =>
   {
        axios.post(`http://localhost:8002/Categoryupdate`, 
            {
                id: e.id.value,
                namacategory: e.namacategory.value
                
            }
        )
        .then((response) =>
            {
                console.log(response)
            }
        );
        window.location.reload();
    }

    render() 
    {
        return (
                    <div>
                        <div className="wrapper">
                            <Header/>
                            <div className="main-panel">
                                <nav className="navbar navbar-default">
                                            <div className="container-fluid">
                                                <div className="navbar-header">
                                                    <button type="button" className="navbar-toggle">
                                                        <span className="sr-only">Toggle navigation</span>
                                                        <span className="icon-bar bar1" />
                                                        <span className="icon-bar bar2" />
                                                        <span className="icon-bar bar3" />
                                                    </button>
                                                    <Link to="#" className="navbar-brand">Dashboard</Link>
                                                </div>
                                                <div className="collapse navbar-collapse">
                                                    <ul className="nav navbar-nav navbar-right">
                                                        <li>
                                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                                                <i className="ti-panel" />
                                                                <p>Stats</p>
                                                            </Link>
                                                        </li>
                                                        <li className="dropdown">
                                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                                                <i className="ti-bell" />
                                                                <p className="notification">5</p>
                                                                <p>Notifications</p>
                                                                <b className="caret" />
                                                            </Link>
                                                            <ul className="dropdown-menu">
                                                                <li><Link to="#">Notification 1</Link></li>
                                                                <li><Link to="#">Notification 2</Link></li>
                                                                <li><Link to="#">Notification 3</Link></li>
                                                                <li><Link to="#">Notification 4</Link></li>
                                                                <li><Link to="#">Another notification</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="ti-settings" />
                                                                <p>Settings</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card">
                                                    <div className="headercos">
                                                        <h3 className="title">Edit Category</h3><p></p>
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Okki </Link><p /></span>

                                                    </div>
                                                </div>

                                                <div className="container-fluid content-view">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="panel panel-default">
                                                                <div className="panel-heading">
                                                                    <h3 className="panel-title">Manage Category</h3>
                                                                </div>
                                                                <div className="panel-body">
                                                                    <div>
                                                                        <div className="text-right">
                                                                            <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-success">Save</button>&nbsp;
                                                                        </div>
                                                                    </div>
                                                                    <ul className="nav nav-tabs" role="tablist">
                                                                        <li role="presentation" className="active"><Link to="/Dashboard" aria-controls="home" role="tab" data-toggle="tab">Basic</Link></li>
                                                                    </ul>
                                                                    <div className="tab-content">
                                                                        <div role="tabpanel" className="tab-pane active fade in" id="home">
                                                                            <form className="form-horizontal">
                                                                                <input type="hidden" className="form-control" ref="id" defaultValue={this.state.id}/>

                                                                                <div className="form-group">
                                                                                    <label className="col-sm-2 control-label">Edit Nama Category</label>                  
                                                                                    <div className="col-sm-8">
                                                                                        <input ref="namacategory" type="text" className="form-control" defaultValue={this.state.namacategory} placeholder="Edit Nama Category" />
                                                                                    </div>
                                                                                </div>

                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                );
    }
}
export default Categoryedit;