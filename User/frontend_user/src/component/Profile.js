import React, { Component } from 'react'
import {Link, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

class Profile extends Component {
    state =
    {
        semualisting:[],
        foto_profile: '',
        namadepan: '',
        alamat_user_admin:''
    }

    componentDidMount=()=>{
        var id_user = cookies.get("login");
        axios.get('http://localhost:8002/dataprofile/' + id_user).then((getData) => 
        {
            console.log(getData.data)            
            this.setState({
                semualisting: getData.data,
            });
        });

        var id_username = cookies.get("login");
        axios.get('http://localhost:8002/data_profile/' + id_username).then((get_Data) => 
        {
            console.log(get_Data.data)
            var namadepan = get_Data.data[0].namadepan;
            var alamat_user_admin = get_Data.data[0].alamat_user_admin;
            var foto_profile = get_Data.data[0].foto_profile;
            
            this.setState({
                namadepan: namadepan,
                alamat_user_admin : alamat_user_admin,
                foto_profile: foto_profile                
            })  
        })
    }

    render() {

    if (cookies.get('login') === undefined)
    {
      return <Redirect to='/'/>
    }

    const datalisting = this.state.semualisting.map((isi, index) => {
        var id =isi.id;
        var nama =isi.nama;
        var alamat_user_admin = isi.alamat_user_admin;
        var posting= isi.posting;
        var harga = isi.harga;
        var foto_produk = isi.foto_produk;
        return <div className="col-md-3" style={{marginTop: 20}}>
            <div className="card" style={{width: '16rem'}}>
                <Link to= {{pathname: '/Product_detail/' + id, state: {id:id}}}><img className="card-img-top" src={'http://localhost:8002/tampungfile/'+foto_produk} height={180}alt="Card image cap" /></Link>
                <div className="card-body">
                    <h5 className="card-title">{posting}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{harga}</h6>         
                </div>
            </div>
        </div>
        
      })  
    return (
        <div>
            <div>
                {/* TITLE */}
                <div className="container" style={{marginTop: 70}}>
                    <div className="card mb-3">
                        <img className="card-img-top" src={'http://localhost:8002/tampungfile/'+ "Cover.png"} alt="Card image cap" />
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img style={{height: 80, width: 85, borderRadius: '50%'}} className="card-img" src={'http://localhost:8002/tampungfile/'+ this.state.foto_profile} alt="Card image cap" />
                                        </div>
                                        <div className="col-md-8">
                                            <h5 className="card-title"><b>{this.state.namadepan}</b></h5>
                                            <p className="card-text">{this.state.alamat_user_admin}</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-toggle="tab" href="#home">Spesifikasi</a>
                                    </li>
                                </ul>
                                <div id="myTabContent" className="tab-content">
                                    <div className="tab-pane fade active show" id="home">
                                        <div className="row">
                                            {datalisting}
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default Profile;