import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  tambahData = (e) => {
      axios.post(`http://localhost:8002/tambahData`, {
          inputSatu: e.namanasabah.value,
          inputDua: e.email.value,
          inputTiga: e.alamat.value,
          inputEmpat: e.nomor.value,
          inputLima: e.gender.value,
          inputEnam: e.birthday.value
        });

  }
 
  render() {
    return (
      <div className="container">
        <form className="form-horizontal">
            <fieldset>
                <legend>Tambah Data</legend>
                <div className="form-group">
                    <label className="col-lg-2 control-label">Nama Nasabah</label>
                    <div className="col-lg-10">
                        <input ref="namanasabah" type="text" className="form-control" placeholder="Nama produk ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Email</label>
                    <div className="col-lg-10">
                        <input ref="email" type="text" className="form-control"  placeholder="Email ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Alamat</label>
                    <div className="col-lg-10">
                        <input ref="alamat" type="text" className="form-control"  placeholder="Alamat ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Nomor Hp</label>
                    <div className="col-lg-10">
                        <input ref="nomor" type="text" className="form-control"  placeholder="Nomor Hp ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Gender</label>
                    <div className="col-lg-10">
                        <input ref="gender" type="text" className="form-control"  placeholder="Gender ..." />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-lg-2 control-label">Birthday</label>
                    <div className="col-lg-10">
                        <input ref="birthday" type="text" className="form-control"  placeholder="Birthday ..." />
                    </div>
                </div>


                <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                        <button type="reset" className="btn btn-default">Cancel</button>&nbsp;
                        <button type="button" onClick={() => this.tambahData(this.refs)} className="btn btn-primary">Submit</button>
                    </div>
                </div>

            </fieldset>
        </form>
      </div>
    )
  }
}
export default Form
