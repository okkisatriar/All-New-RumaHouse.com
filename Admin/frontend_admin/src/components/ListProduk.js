import React, { Component } from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
     login: state.hasil_login
    };
}

class ListProduk extends Component {
  state = {
      dataproduk: [],
      redirect: false
  }
  componentDidMount(){
      axios.get(`http://localhost:8003/`).then(
          /** Disini fungsi */
          (ambilData) => {
              console.log(ambilData.data);
              this.setState({
                  dataproduk: ambilData.data
              });
          }
      )
    //   componentDidMount()
    //   {
    //     var id_sblm = this.props.location.state.produkID;
    //     axios.get('http://localhost:8002/delet/'+id_sblm).then(
    //         (hasilAmbil) => {
    //         console.log(hasilAmbil.data);
    //         this.setState(
    //           {
    //             idnasabah: hasilAmbil.data[0].id
    //           });
            
    //     }
    //     );
    // }


  }
  render() 
    {
        // Logic dimulai disini
        if(this.props.login != "oke"){
            {this.state.redirect= true}
            this.props.dispatch({type:'Login', kirim: "gagal bro palsu lu" })
        }

        if(this.state.redirect){
            return <Redirect to="/"/>
        }

        // tidak berkaitan dgn yang di atas
        const hasil = this.state.dataproduk
        .map((isi, urutan) => 
            {
                var urut = urutan + 1;
                var idnasabah = isi.id;
                var namanasabah = isi.nama_nasabah;
                var email = isi.email;
                var alamat = isi.alamat;
                var nomor = isi.nomor_hp;
                var gender = isi.gender;
                var birthday = isi.birthday;

                // var hargaproduk = isi.harga;
                
                return  <tr key={urutan} style={{textAlign: 'center'}}>
                            <td>{urut}</td>
                            <td>{namanasabah}</td>
                            <td>{email}</td>
                            <td>{alamat}</td>
                            <td>{nomor}</td>
                            <td>{gender}</td>
                            <td>{birthday}</td>
                            <td>
                                <Link to=
                                    {
                                        {
                                            pathname: '/editdata/', 
                                            state: {idnasabah: idnasabah}
                                        }
                                    } 
                                    className="btn btn-warning"><i className="fa fa-pencil"></i></Link>&nbsp;
                                <button className="btn btn-danger btn-md"><i className="fa fa-trash"></i></button>&nbsp;
                                <Link to=
                                    {
                                        {
                                            pathname: '/tambahdata/', 
                                            state: {idnasabah: idnasabah}
                                        }
                                    } 
                                className="btn btn-danger btn-md"><i className="fa fa-plus"></i></Link>
                            </td>
                        </tr>
            }
        );
                return (
                    <div className="container">
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr style={{backgroundColor: ''}}>
                                    <th style={{textAlign: 'center'}}>Nomor</th>
                                    <th style={{textAlign: 'center'}}>Nama Nasabah</th>
                                    <th style={{textAlign: 'center'}}>Email</th>
                                    <th style={{textAlign: 'center'}}>Alamat</th>
                                    <th style={{textAlign: 'center'}}>Nomor Hp</th>
                                    <th style={{textAlign: 'center'}}>Gender</th>
                                    <th style={{textAlign: 'center'}}>Birthday</th>
                                    <th style={{textAlign: 'center'}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hasil}
                            </tbody>
                        </table>
                    </div>
                )
    }
}
export default connect(mapStateToProps)(ListProduk)
