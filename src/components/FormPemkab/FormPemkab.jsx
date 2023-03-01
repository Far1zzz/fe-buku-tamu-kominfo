import React, { useState } from "react";
import { Select } from "antd";

const FormPemkab = ({ formData, setFormData }) => {
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
                    value: "Non Asn",
                    label: "Non Asn",
                  },
                ]}
              />
            </div>

            <label htmlFor="">
              Asal Instansi<small>*(Wajib Diisi)</small>
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
                    value: "Sekretariat Daerah",
                    label: "Sekretariat Daerah",
                  },
                  {
                    value: "Sekretariat DPR",
                    label: "Sekretariat DPR",
                  },
                  {
                    value: "Diskominfo-SP",
                    label: "Diskominfo-SP",
                  },

                  {
                    value: "Irkap Banyuasin",
                    label: "Irkap Banyuasin",
                  },
                  {
                    value: "BPBD KESBANGPOL",
                    label: "BPBD KESBANGPOL",
                  },
                  {
                    value: "Badan Pendapatan Daerah",
                    label: "Badan Pendapatan Daerah",
                  },
                  {
                    value: "BPKAD Banyuasin",
                    label: "BPKAD Banyuasin",
                  },
                  {
                    value: "Setwan Banyuasin",
                    label: "Setwan Banyuasin",
                  },
                  {
                    value: "Bapedda & Litbang",
                    label: "Bapedda & Litbang",
                  },
                  {
                    value: "Dinas Perhubungan",
                    label: "Dinas Perhubungan",
                  },
                  {
                    value: "Dinas Perizinan",
                    label: "Dinas Perizinan",
                  },
                  {
                    value: "Dinas Sosial",
                    label: "Dinas Sosial",
                  },
                  {
                    value: "Inspektorat Kabupaten",
                    label: "Inspektorat Kabupaten",
                  },
                  {
                    value: "Dinas Tanaman Pangan dan Holtikultura",
                    label: "Dinas Tanaman Pangan dan Holtikultura",
                  },
                  {
                    value: "Dinas Pertanian",
                    label: "Dinas Pertanian",
                  },
                  {
                    value: "BKPSDM",
                    label: "BKPSDM",
                  },
                  {
                    value: "Dinas PU dan Tata Ruang",
                    label: "Dinas PU dan Tata Ruang",
                  },
                  {
                    value: "Dinas Disperkimtan",
                    label: "Dinas Disperkimtan",
                  },
                  {
                    value: "BPKAD",
                    label: "BPKAD",
                  },
                  {
                    value: "Dinas Ksehatan",
                    label: "Dinas Ksehatan",
                  },

                  {
                    value: "Dinas Pendidikan Pemuda Olahraga dan Pariwisata",
                    label: "Dinas Pendidikan Pemuda Olahraga dan Pariwisata",
                  },
                  {
                    value: "Satpol PP & Damkar",
                    label: "Satpol PP & Damkar",
                  },
                  {
                    value: "Dinas Pertahanan Pangan",
                    label: "Dinas Pertahanan Pangan",
                  },
                  {
                    value: "Dinas Lingkungan Hidup",
                    label: "Dinas Lingkungan Hidup",
                  },
                  {
                    value: "Dinas Kependudukan dan Pencatatan Sipil",
                    label: "Dinas Kependudukan dan Pencatatan Sipil",
                  },
                  {
                    value: "Kecamatan Air Kumbang",
                    label: "Kecamatan Air Kumbang",
                  },

                  {
                    value: "Kecamatan Air Saleh",
                    label: "Kecamatan Air Saleh",
                  },
                  {
                    value: "Kecamatan Banyuasin I",
                    label: "Kecamatan Banyuasin I",
                  },
                  {
                    value: "Kecamatan Banyuasin II",
                    label: "Kecamatan Banyuasin II",
                  },
                  {
                    value: "Kecamatan Banyuasin III",
                    label: "Kecamatan Banyuasin III",
                  },
                  {
                    value: "Kecamatan Betung",
                    label: "Kecamatan Betung",
                  },
                  {
                    value: "Kecamatan Karang Agung Ilir",
                    label: "Kecamatan Karang Agung Ilir",
                  },
                  {
                    value: "Kecamatan Makarti Jaya",
                    label: "Kecamatan Makarti Jaya",
                  },
                  {
                    value: "Kecamatan Muara Padang",
                    label: "Kecamatan Muara Padang",
                  },
                  {
                    value: "Kecamatan Muara Sugihan",
                    label: "Kecamatan Muara Sugihan",
                  },
                  {
                    value: "Kecamatan Muara Telang",
                    label: "Kecamatan Muara Telang",
                  },
                  {
                    value: "Kecamatan Pulau Rimau",
                    label: "Kecamatan Pulau Rimau",
                  },
                  {
                    value: "Kecamatan Rambutan",
                    label: "Kecamatan Rambutan",
                  },
                  {
                    value: "Kecamatan Rantau Bayur",
                    label: "Kecamatan Rantau Bayur",
                  },
                  {
                    value: "Kecamatan Sembawa",
                    label: "Kecamatan Sembawa",
                  },
                  {
                    value: "Kecamatan Selat Penungguan",
                    label: "Kecamatan Selat Penungguan",
                  },
                  {
                    value: "Kecamatan Suak Tapeh",
                    label: "Kecamatan Suak Tapeh",
                  },
                  {
                    value: "Kecamatan Sumber Marga Telang",
                    label: "Kecamatan Sumber Marga Telang",
                  },
                  {
                    value: "Kecamatan Talang Kelapa",
                    label: "Kecamatan Talang Kelapa",
                  },
                  {
                    value: "Kecamatan Tanjung Lago",
                    label: "Kecamatan Tanjung Lago",
                  },
                  {
                    value: "Kecamatan Tungkal Ilir",
                    label: "Kecamatan Tungkal Ilir",
                  },
                ]}
              />
            </div>
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

export default FormPemkab;
