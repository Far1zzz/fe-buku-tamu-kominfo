import React, { useState } from "react";
import { Select } from "antd";

const FormUmum = ({ formData, setFormData }) => {
  const [showHide, setShowHide] = useState("");
  const [hideKeperluan, setHideKeperluan] = useState("");
  const [hideStatus, setHideStatus] = useState("");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 label-title ">
            <label htmlFor="">
              Nama <small>*(Wajib Diisi)</small>
            </label>
            <div className="input-umum">
              <input
                type="text"
                placeholder="Ketik Nama Anda"
                value={formData.nama}
                onChange={(e) => {
                  setFormData({ ...formData, nama: e.target.value });
                }}
              />
            </div>
            <label htmlFor="">
              Nomor Hp <small>*(Wajib Diisi)</small>
            </label>
            <div className="input-umum">
              <input
                type="number"
                placeholder="Silahkan Isi"
                value={formData.noHp}
                onChange={(e) => {
                  setFormData({ ...formData, noHp: e.target.value });
                }}
              />
            </div>
            <label htmlFor="">
              Status Pegawai <small>*(Wajib Diisi)</small>
            </label>
            <div className="input-umum">
              <Select
                onChange={(value) => {
                  setFormData({ ...formData, statusPegawai: value });
                  setShowHide(value);
                  setHideStatus(value);
                }}
                defaultValue="......"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
                bordered={false}
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
            {hideStatus === "Lainnya" && (
              <div className="input-umum mt-3">
                <input
                  type="text"
                  placeholder="Silahkan Input"
                  // value={formData.nama}
                  onChange={(e) => {
                    // setFormData({ ...formData, nama: e.target.value });
                  }}
                />
              </div>
            )}
            <label htmlFor="">
              Alamat/Asal Instansi<small>*(Wajib Diisi)</small>
            </label>
            <div className="input-umum-more">
              <textarea
                type="text"
                placeholder="Silahkan Input"
                value={formData.alamat}
                onChange={(e) => {
                  setFormData({ ...formData, alamat: e.target.value });
                }}
              />
            </div>
            {showHide === "Asn" || showHide === "Non Asn(Honorer)" ? (
              <>
                <label htmlFor="">
                  Bidang<small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum">
                  <input
                    type="text"
                    placeholder="Silahkan Input"
                    value={formData.bidang}
                    onChange={(e) => {
                      setFormData({ ...formData, bidang: e.target.value });
                    }}
                  />
                </div>

                <label htmlFor="">
                  Jabatan<small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum">
                  <input
                    type="text"
                    placeholder="Silahkan Input"
                    value={formData.jabatan}
                    onChange={(e) => {
                      setFormData({ ...formData, jabatan: e.target.value });
                    }}
                  />
                </div>
              </>
            ) : null}
          </div>
          <div className="col-lg-6 label-title">
            <label htmlFor="">
              Tujuan <small>*(Wajib Diisi)</small>
            </label>
            <div className="input-umum">
              <Select
                onChange={(value) => {
                  setFormData({ ...formData, tujuan: value });
                }}
                defaultValue="..."
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
                bordered={false}
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
            <label htmlFor="">
              Keperluan <small>*(Wajib Diisi)</small>
            </label>
            <div className="input-umum">
              <Select
                onChange={(value) => {
                  setFormData({ ...formData, keperluan: value });
                  setHideKeperluan(value);
                }}
                defaultValue="..."
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
                bordered={false}
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
            {hideKeperluan === "Umum Atau Lain-Lain" && (
              <>
                <label htmlFor="">
                  Jika Umum/Lainnya Silahkan Input<small>*(Wajib Diisi)</small>
                </label>
                <div className="input-umum-more">
                  <textarea
                    type="text"
                    placeholder="Silahkan Input"
                    value={formData.detail_Keperluan}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        detail_Keperluan: e.target.value,
                      });
                    }}
                  />
                </div>
              </>
            )}
            <label htmlFor="">
              {" "}
              Masukkan Jumlah Tamu<small>*(Wajib Diisi)</small>
            </label>
            <div className="input-umum">
              <input
                type="number"
                placeholder="..."
                value={formData.jumlahTamu}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    jumlahTamu: e.target.value,
                  });
                }}
              />
            </div>

            <label htmlFor="">
              Silahkan Isi Nama<small>*(Wajib Diisi)</small>
            </label>
            <div className="input-umum-more">
              <textarea type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUmum;
