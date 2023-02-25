import React from "react";
import { Select } from "antd";
import "../../assets/css/InputFormUmum.css";

const InputFormInstansiLuar = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
                  Tujuan <small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum">
                  <Select
                    defaultValue="..."
                    style={{
                      width: "100%",
                      borderRadius: "40px",
                      backgroundColor: "white",
                    }}
                    bordered={false}
                    onChange={handleChange}
                    options={[
                      {
                        value: "Kepala Dinas",
                        label: "Kepala Dinas",
                      },
                      {
                        value: "Sekretaris Dinas",
                        label: "Sekretaris Dinas",
                      },
                      {
                        value: "Bidang Aptika",
                        label: "Bidang Aptika",
                      },
                      {
                        value: "Bidang Informasi Kom.Publik",
                        label: "Bidang Informasi Kom.Publik",
                      },
                      {
                        value: "Bidang Statistik",
                        label: "Bidang Statistik",
                      },
                      {
                        value: "Bidang Persandian",
                        label: "Bidang Persandian",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 label-title">
                <label htmlFor="">
                  Nomor Hp <small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum">
                  <input type="number" placeholder="Silahkan Isi" />
                </div>
              </div>
              <div className="col-lg-6 label-title">
                <label htmlFor="">
                  Keperluan <small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum">
                  <Select
                    defaultValue="..."
                    style={{
                      width: "100%",
                      borderRadius: "40px",
                      backgroundColor: "white",
                    }}
                    bordered={false}
                    onChange={handleChange}
                    options={[
                      {
                        value: "Penelitian Dan Pelaporan",
                        label: "Penelitian Dan Pelaporan",
                      },
                      {
                        value: "Konsultasi Dan Koordinasi",
                        label: "Konsultasi Dan Koordinasi",
                      },
                      {
                        value: "Kunjungan Atau Wisata Arsip",
                        label: "Kunjungan Atau Wisata Arsip",
                      },
                      {
                        value: "Bimbingan Teknis",
                        label: "Bimbingan Teknis",
                      },
                      {
                        value: "Umum Atau Lain-Lain",
                        label: "Umum Atau Lain-Lain",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 label-title">
                <label htmlFor="">
                  Status Pegawai <small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum">
                  <Select
                    defaultValue="Asn/nonAsn"
                    style={{
                      width: "100%",
                      borderRadius: "40px",
                      backgroundColor: "white",
                    }}
                    bordered={false}
                    onChange={handleChange}
                    options={[
                      {
                        value: "Asn",
                        label: "Asn",
                      },
                      {
                        value: "Non Asn(Honorer)",
                        label: "Non Asn(Honorer)",
                      },
                      {
                        value: "Lainnya",
                        label: "Lainnya",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-lg-6 label-title">
                <label htmlFor="">
                  Jika Umum/Lainnya Silahkan Input<small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum-more">
                  <textarea type="text" placeholder="Silahkan Input" />
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
