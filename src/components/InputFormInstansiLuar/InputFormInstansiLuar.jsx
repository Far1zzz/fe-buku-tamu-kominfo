import React, { useState } from "react";
import "../../assets/css/InputForm.css";
import FormUmum from "../FormUmum/FormUmum";
import WebcamUmum from "../WebcamUmum/WebcamUmum";

const InputFormInstansiLuar = () => {
  const FormTitle = ["Silahkan Ambil Foto", "Silahkan Isi Data Diri Anda"];
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    img: "",
    nama: "",
    noHp: "",
    statusPegawai: "",
    alamat: "",
    bidang: "",
    jabatan: "",
    keperluan: "",
    detail_Keperluan: "",
    jumlahTamu: "",
    tujuan: "",
  });

  const DisplayPage = () => {
    if (page === 0) {
      return <WebcamUmum formData={formData} setFormData={setFormData} />;
    } else {
      return <FormUmum formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="form-input-umum">
        <div className="header-input-umum">
          <i class="bi bi-list"></i>
          {FormTitle[page]}
        </div>
        <div className="body mt-3">{DisplayPage()}</div>
        <div className="footer">
          {page === 0 ? null : (
            <div className="button-prev">
              <button
                onClick={() => {
                  setPage((page) => page - 1);
                }}
              >
                Prev
              </button>
            </div>
          )}

          <div className="button-next-submit">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (page === FormTitle.length - 1) {
                  console.log(formData);
                } else {
                  setPage((page) => page + 1);
                }
              }}
            >
              {page === FormTitle.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputFormInstansiLuar;
