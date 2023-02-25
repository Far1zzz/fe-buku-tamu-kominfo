import React from "react";
import "../../assets/css/InputFormUmum.css";

const InputFormInstansiLuar = () => {
  return (
    <>
      {/* <div className="header-input-umum">
        <i class="bi bi-list"></i>Silahkan Isi Data Diri Anda
      </div> */}
      <div className="form-input-umum">
        <form action="">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 label-title">
                <label htmlFor="">
                  Nama <small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum">
                  <input type="text" placeholder="Ketik Nama Anda" />
                </div>
              </div>
              <div className="col-lg-6 label-title">
                <label htmlFor="">
                  Nama <small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum">
                  <input type="text" placeholder="Tujuan" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputFormInstansiLuar;
