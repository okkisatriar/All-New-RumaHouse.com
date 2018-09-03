import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Producttambah extends Component 
{
    state={
        // id: '',
        posting: '',
        nama:'',
        harga:'',
        status:'',
        deskripsi:'',
        foto_produk:''

        // posting: '',
        // nama:'',
        // deskripsi:'',
        // foto_produk:''
    }
    
    //Masih Belum Berfungsi (Foto)
    onchange = (e) => {
        switch(e.target.name){
            case 'foto_produk': 
            this.setState({
                    foto_produk:e.target.files[0],
            });
            break;
        }
    }

    //Fungsi kirim data berbentuk text
    tambahData = (e) => {
        var posting = e.posting.value;
        var nama = e.nama.value;
        var harga = e.harga.value;
        var status = e.status.value;
        var deskripsi = e.deskripsi.value;
        this.setState({
                // posting: posting,
                // nama: nama,
                // deskripsi: deskripsi
                posting: posting,
                nama: nama,
                harga: harga,
                status: status,
                deskripsi: deskripsi
        })
    }

    value = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',this.state.foto_produk);
        formData.append('posting',this.state.posting);
        formData.append('nama',this.state.nama);
        formData.append('harga',this.state.harga);
        formData.append('status',this.state.status);
        formData.append('deskripsi',this.state.deskripsi);

        axios.post('http://localhost:8002/okkisatria/', formData);
        // console.log(this.state)
        // .then((response) => 
        // {
        //     console.log(response)
        // });
        // window.location.reload();
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
                                                    <h3 className="title">Tambah Data Product</h3><p></p>
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Okki </Link><p /></span>
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                                <div className="container" >
                                                    <form className="form-horizontal" onSubmit={this.value} encType="multipart/form-data">
                                                    {/* <form className="form-horizontal" encType="multipart/form-data"> */}
                                                        <fieldset> 
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Nama User</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="nama" type="text" className="form-control" placeholder="Masukan Nama User" />
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Judul Iklan</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="posting" type="text" className="form-control" placeholder="Masukan Judul Iklan"/>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label  className="col-sm-2 control-label">Harga</label>
                                                                <div className="col-sm-4">
                                                                    <input ref="harga" type="text" className="form-control" placeholder="Masukan Harga" />
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Status</label>
                                                                <div className="col-sm-4">
                                                                    <select ref="status" className="form-control" >
                                                                        <option defaultValue="Jual" ref="Jual">Jual</option>
                                                                        <option defaultValue="Kontrakkan" ref="Kontrakkan">Kontrakkan</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            {/* belum fix Dropdown */}
                                                            {/* <div className="form-group">
                                                                <label htmlFor="name" className="col-sm-2 control-label">Edit Kategori</label>
                                                                <div className="col-sm-8">
                                                                    <input type="text" className="form-control" placeholder="Masukan Nama Kategori" name="name"/>
                                                                </div>
                                                            </div> */}
                                                            
                                                            {/* Deskripsi */}
                                                            <div className="form-group">
                                                                <label htmlFor="description" className="col-sm-2 control-label">Tambah Deskripsi Iklan</label>
                                                                <div className="col-sm-8">
                                                                    <input ref="deskripsi" style={{height:250}} placeholder="Tambah Deskripsi" className="form-control" />
                                                                </div>
                                                            </div>

                                                            {/* Foto */}
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Foto Produk</label>
                                                                <div className="col-sm-8">
                                                                    <input name="foto_produk" onChange={this.onchange} type="file" className="form-control" id="inputgambar" />
                                                                </div>
                                                            </div>

                                                            {/* Fungsi button Submit */}
                                                            <div className="form-group">
                                                                <div className="col-sm-10 col-sm-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="submit" onClick={() => this.tambahData(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>
                                                                </div>
                                                            </div>
                                                        </fieldset>   
                                                    </form>
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
export default Producttambah;


















// import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import axios from 'axios';

// class Producttambah extends Component 
// {
//     // state={
//     //     id: '',
//     //     posting: '',
//     //     nama:'',
//     //     deskripsi:'',
//     //     foto_produk:''   
//     // }
    
//     //Masih Belum Berfungsi (Foto)
//     // onchange = (e) => {
//     //     switch(e.target.name){
//     //         case 'foto_produk': 
//     //         this.setState({
//     //                 foto_produk:e.target.files[0],
//     //         });
//     //         break;
//     //     }
//     // }

//     //Fungsi kirim data berbentuk text
//     tambahData = (e) => {
//         axios.post('http://localhost:8002/okkisatria/', {
//                 posting: e.posting.value,
//                 nama: e.nama.value,
//                 harga: e.harga.value,
//                 status: e.status.value,
//                 deskripsi: e.deskripsi.value
//         });
//     }

//     // value = (e) =>{
//     //     e.preventDefault();
//     //     let formData = new FormData();
//     //     formData.append('file',this.state.foto_produk);
//     //     formData.append('posting',this.state.posting);
//     //     formData.append('nama',this.state.nama);
//     //     formData.append('deskripsi',this.state.deskripsi);

//     //     axios.post('http://localhost:8002/okkisatria/', formData)
//     //     console.log(this.state)
//     //     .then((response) => 
//     //     {
//     //         console.log(response)
//     //     });
//     //     window.location.reload();
//     // }

//     render()
//     {
//         return (
//                     <div>
//                         <div className="wrapper">
//                             <Header/>
//                             <div className="main-panel">
//                                 <nav className="navbar navbar-default">
//                                             <div className="container-fluid">
//                                                 <div className="navbar-header">
//                                                     <button type="button" className="navbar-toggle">
//                                                         <span className="sr-only">Toggle navigation</span>
//                                                         <span className="icon-bar bar1" />
//                                                         <span className="icon-bar bar2" />
//                                                         <span className="icon-bar bar3" />
//                                                     </button>
//                                                     <Link to="#" className="navbar-brand">Dashboard</Link>
//                                                 </div>
//                                                 <div className="collapse navbar-collapse">
//                                                     <ul className="nav navbar-nav navbar-right">
//                                                         <li>
//                                                             <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
//                                                                 <i className="ti-panel" />
//                                                                 <p>Stats</p>
//                                                             </Link>
//                                                         </li>
//                                                         <li className="dropdown">
//                                                             <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
//                                                                 <i className="ti-bell" />
//                                                                 <p className="notification">5</p>
//                                                                 <p>Notifications</p>
//                                                                 <b className="caret" />
//                                                             </Link>
//                                                             <ul className="dropdown-menu">
//                                                                 <li><Link to="#">Notification 1</Link></li>
//                                                                 <li><Link to="#">Notification 2</Link></li>
//                                                                 <li><Link to="#">Notification 3</Link></li>
//                                                                 <li><Link to="#">Notification 4</Link></li>
//                                                                 <li><Link to="#">Another notification</Link></li>
//                                                             </ul>
//                                                         </li>
//                                                         <li>
//                                                             <Link to="#">
//                                                                 <i className="ti-settings" />
//                                                                 <p>Settings</p>
//                                                             </Link>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </nav>
//                                 <div className="content">
//                                     <div className="container-fluid">
//                                         <div className="row">
//                                             <div className="col-md-12">
//                                                 <div className="card">
//                                                     <div className="headercos">
//                                                     <h3 className="title">Tambah Data Product</h3><p></p>
//                                                         <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
//                                                         <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Okki </Link><p /></span>
//                                                     </div>
//                                                 </div>

//                                                 {/* Konten */}
//                                                 <div className="container" >
//                                                     {/* <form className="form-horizontal" onSubmit={this.value} encType="multipart/form-data"> */}
//                                                     <form className="form-horizontal" encType="multipart/form-data">
//                                                         <fieldset> 
//                                                             <div className="form-group">
//                                                                 <label className="col-sm-2 control-label">Nama User</label>
//                                                                 <div className="col-sm-8">
//                                                                     <input ref="nama" type="text" className="form-control" placeholder="Masukan Nama User" />
//                                                                 </div>
//                                                             </div>

//                                                             <div className="form-group">
//                                                                 <label className="col-sm-2 control-label">Judul Iklan</label>
//                                                                 <div className="col-sm-8">
//                                                                     <input ref="posting" type="text" className="form-control" placeholder="Masukan Judul Iklan"/>
//                                                                 </div>
//                                                             </div>
                                                            
                                                            
//                                                             <div className="form-group">
//                                                                 <label  className="col-sm-2 control-label">Harga</label>
//                                                                 <div className="col-lg-4">
//                                                                     <input ref="harga" type="text" className="form-control" placeholder="Masukan Harga" />
//                                                                 </div>
//                                                             </div>

//                                                             <div className="form-group">
//                                                                 <label className="col-sm-2 control-label">Status</label>
//                                                                 <div className="col-sm-4">
//                                                                     <select ref="status" className="form-control" >
//                                                                     <option defaultValue="Jual" ref="Jual">Jual</option>
//                                                                     <option defaultValue="Kontrakkan" ref="Kontrakkan">Kontrakkan</option>
//                                                                     {/* <option defaultValue="Terjual" ref="terjual">Terjual</option> */}
//                                                                     </select>
//                                                                 </div>
//                                                             </div>
//                                                             {/* belum fix Dropdown */}
//                                                             {/* <div className="form-group">
//                                                                 <label htmlFor="name" className="col-sm-2 control-label">Edit Kategori</label>
//                                                                 <div className="col-sm-8">
//                                                                     <input type="text" className="form-control" placeholder="Masukan Nama Kategori" name="name"/>
//                                                                 </div>
//                                                             </div> */}
                                                            
//                                                             {/* Deskripsi */}
//                                                             <div className="form-group">
//                                                                 <label htmlFor="description" className="col-sm-2 control-label">Tambah Deskripsi Iklan</label>
//                                                                 <div className="col-sm-8">
//                                                                     <input ref="deskripsi" style={{height:250}} placeholder="Tambah Deskripsi" className="form-control" />
//                                                                 </div>
//                                                             </div>

//                                                             {/* Foto */}
//                                                             {/* <div className="form-group">
//                                                                 <label className="col-lg-2 control-label">Foto Produk</label>
//                                                                 <div className="col-lg-8">
//                                                                     <input name="foto_produk" onChange={this.onchange} type="file" className="form-control" id="inputgambar" />
//                                                                 </div>
//                                                             </div> */}

//                                                             {/* Fungsi button Submit */}
//                                                             <div className="form-group">
//                                                                 <div className="col-lg-10 col-lg-offset-2">
//                                                                     <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
//                                                                     <button type="submit" onClick={() => this.tambahData(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>
//                                                                 </div>
//                                                             </div>
//                                                         </fieldset>   
//                                                     </form>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <Footer/>
//                             </div>
//                         </div>
//                     </div>
//                 );
//     }
// }
// export default Producttambah;