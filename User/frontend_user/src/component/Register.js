import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {

  onchange = (e) => 
    {
      switch(e.target.name){
        case 'foto_profile': 
        this.setState({
          foto_profile:e.target.files[0]
        });
      }
    }

  registeruser = (e) =>{
    var namadepan = e.namadepan.value;
    var username = e.username.value;
    var email = e.email.value;
    var password = e.password.value;
    var handphone = e.handphone.value;
    var alamat = e.alamat.value;
    this.setState({
      namadepan: namadepan,
      username: username,
      email: email,
      password: password,
      handphone: handphone,
      alamat: alamat
    })
  }

  value = (e) =>{
    e.preventDefault();
    let formData = new FormData();
    formData.append('foto_profile',this.state.foto_profile);
    formData.append('namadepan',this.state.namadepan);
    formData.append('username',this.state.username);
    formData.append('email',this.state.email);
    formData.append('password',this.state.password);
    formData.append('handphone',this.state.handphone);
    formData.append('alamat',this.state.alamat);

    axios.post('http://localhost:8002/registeruser/', formData)
    .then((hasil)=> {
      console.log(hasil)
      var respon=hasil.data;
      if(respon === 1){
          this.setState({
              status:true
          })
      }
  })
}


  render() {
    return (
      <div>
      <div className="container" style={{marginTop: 80}}>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6" style={{backgroundColor: 'rgb(192, 188, 181)', padding: 30, borderRadius: '1%'}}>
            <div className="panel-heading">
              <h3><b>Registrasi</b></h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.value} encType="multipart/form-data">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="namadepan">Nama Depan</label>
                    <input type="text" ref="namadepan" className="form-control" placeholder="Okki Satria" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="username">Username</label>
                    <input type="text" ref="username" className="form-control" placeholder="okki_satria" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" ref="email" className="form-control" id="inputEmail4" placeholder="@gmail" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" ref="password" className="form-control" id="inputPassword4" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="handphone">No. Handphone</label>
                  <input type="text" ref="handphone" className="form-control" id="handphone" placeholder={+6280000000000} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Alamat</label>
                  <input type="text" ref="alamat" className="form-control" id="inputAddress" placeholder="Sudirman, Setia Budi" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Foto Profile</label>
                    <input name="foto_profile" onChange={this.onchange} type="file" className="form-control" />
                  </div>
                </div>
                {/* <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Kota</label>
                    <input type="text" ref="kota" className="form-control" id="inputCity" placeholder="Jakarta" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">Negara</label>
                    <select id="inputState" className="form-control">
                      <option selected>Pilih...</option>
                      <option>Indonesia</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Kode Pos</label>
                    <input type="text" className="form-control" id="inputZip" placeholder={10510} />
                  </div>
                </div> */}
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => this.registeruser(this.refs)}>Daftar</button>
              </form>
            </div>
          </div>
          <div className="col-md-3" />
        </div>
        </div>
      </div>
    )
  }
}
export default Register;