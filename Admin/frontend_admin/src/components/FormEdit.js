import React, { Component } from 'react';
import axios from 'axios';

class FormEdit extends Component {
  state = 
    {
        idnasabah: '',
        namanasabah: '',
        email: '',
        alamat: '',
        nomor: '',
        gender: '',
        birthday: '',
        foto:'',
    }

//   Untuk munculin data yang mengandung id yg ditujuh di database
  componentDidMount(){
      var id_sblm = this.props.location.state.produkID;
      axios.get('http://localhost:8002/getdata/'+id_sblm).then(
          (hasilAmbil) => {
          console.log(hasilAmbil.data);
          this.setState(
            {
              idnasabah: hasilAmbil.data[0].id,
              namanasabah: hasilAmbil.data[0].nama_nasabah,
              email: hasilAmbil.data[0].email,
              alamat: hasilAmbil.data[0].alamat,
              nomor: hasilAmbil.data[0].nomor_hp,
              gender: hasilAmbil.data[0].gender,
              birthday: hasilAmbil.data[0].birthday
            });
          
      }
      );
  }

//   Di bagian input file (jika terjadi perubahan maka akan dijalankan fungsi "onchange")
onchange = (e) => 
    {
        switch(e.target.name)
        {
            case 'fotoproduk':
                this.setState(
                    {
                        foto: e.target.files[0],
                    });
            break;
        }
    }
  
value = (e) => 
    {
        this.setState(
            {
                idnasabah: e.id_nasabah.value,
                namanasabah: e.nama_nasabah.value,
                email: e.email_nasabah.value,
                alamat: e.alamat_nasabah.value,
                nomor: e.nomor_nasabah.value,
                gender: e.gender_nasabah.value,
                birthday: e.birthday_nasabah.value
            })
    }


updateData = (e) => 
    {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', this.state.foto);
        formData.append('idnasabah', this.state.idnasabah);
        formData.append('namanasabah', this.state.namanasabah);
        formData.append('email', this.state.email);
        formData.append('alamat', this.state.alamat);
        formData.append('nomor', this.state.nomor);
        formData.append('gender', this.state.gender);
        formData.append('birthday', this.state.birthday);

        // axios.post('http://localhost:8002/ubahData/', {
        //     id: e.idproduk.value,
        //     namaproduk: e.namaproduk.value,
        //     harga: e.hargaproduk.value,
        //     foto_produk: e.fotoproduk.value
        // });
        axios.post('http://localhost:8002/ubahData/', formData);
    }
  render() {
    return (
        <div className="container">
            <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
                <fieldset>
                    <legend>Edit Data</legend>
                    <input type="hidden" className="form-control" ref="id_nasabah" defaultValue={this.state.idnasabah}/>
                    <div className="form-group">
            
                        <label className="col-lg-2 control-label">Nama Nasabah</label>
                        <div className="col-lg-10">
                            <input ref="nama_nasabah" type="text" className="form-control" defaultValue={this.state.namanasabah} placeholder="Nama Nasabah ..." />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Email</label>
                        <div className="col-lg-10">
                            <input ref="email_nasabah" type="text" className="form-control"  defaultValue={this.state.email} placeholder="Email ..." />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Alamat</label>
                        <div className="col-lg-10">
                            <input ref="alamat_nasabah" type="text" className="form-control"  defaultValue={this.state.alamat} placeholder="Alamat ..." />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Nomor Hp</label>
                        <div className="col-lg-10">
                            <input ref="nomor_nasabah" type="text" className="form-control"  defaultValue={this.state.nomor} placeholder="Nomor Hp ..." />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Gender</label>
                        <div className="col-lg-10">
                            <input ref="gender_nasabah" type="text" className="form-control"  defaultValue={this.state.gender} placeholder="Gender ..." />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Birthday</label>
                        <div className="col-lg-10">
                            <input ref="birthday_nasabah" type="text" className="form-control"  defaultValue={this.state.birthday} placeholder="Birthday ..." />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-2 control-label">Foto Produk</label>
                        <div className="col-lg-10">
                            <input name="fotoproduk" onChange={this.onchange} type="file" className="form-control"  />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-lg-10 col-lg-offset-2">
                            <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                            <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button>
                            {/* <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button> */}
                        </div>
                    </div>

                </fieldset>
            </form>
        </div>
    )
  }
}
export default FormEdit;
