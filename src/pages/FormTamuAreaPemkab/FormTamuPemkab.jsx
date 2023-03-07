import { Layout, Menu } from "antd";
import React from "react";
import "../../assets/css/FormInputPage.css";
import Clock from "react-live-clock";
import BanyuasinBangkit from "../../assets/icons/BanyuasinBangkit.png";
import Gerakan from "../../assets/icons/12gerakan.png";
import Program from "../../assets/icons/7program.png";
import "../../assets/css/ModalContent.css";
import InputFormPemkab from "../../components/InputFormPemkab/InputFormPemkab";
import ModalVisiMisi from "../../components/ModalVisiMisi/ModalVisiMisi";
import Modal7ProgramPrioritas from "../../components/Modal7ProgramPrioritas/Modal7ProgramPrioritas";
import Modal12Gerakan from "../../components/Modal12Gerakan/Modal12Gerakan";

const { Header, Content, Sider } = Layout;

const FormTamuPemkab = () => {
  const date = new Date();

  const tahun = date.getFullYear(),
    tanggal = date.getDate();

  const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    monthName = months[date.getMonth()];

  const namaHari = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
    ],
    dayName = namaHari[date.getDay()];

  const result = dayName + ", " + tanggal + " " + monthName + " " + tahun;

  return (
    <Layout style={{ color: "white" }}>
      <Header>
        <div className="header-buku-tamu">
          <div className="title-header">
            <h5>E-Buku</h5>
          </div>
          <div className="icon-header">
            <img src={Gerakan} alt="" />
            <img src={Program} alt="" />
            <img src={BanyuasinBangkit} alt="" />
          </div>
        </div>
      </Header>
      <Content>
        <Layout>
          <Sider
            className="slider-content"
            width={300}
            style={{
              height: "100%",
              backgroundColor: "#4E2222",
            }}
          >
            <Menu
              style={{
                background: "#4E2222",
                color: "white",
                padding: "40px 0 0 0",
              }}
            >
              <Menu.Item
                style={{
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: 0,
                  width: "100%",
                  margin: "0 0 18px 0",
                  fontSize: "17px",
                }}
              >
                <div className="menu-item">
                  <i class="bi bi-house-fill"></i>
                  <b>Menu</b>
                </div>{" "}
              </Menu.Item>
              <Menu.Item
                style={{
                  width: "100%",
                  margin: "0px 0 5px 0",
                  borderRadius: 0,
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <ModalVisiMisi>
                  {" "}
                  <div className="menu-item">
                    <i class="bi bi-circle-fill"></i>
                    <b>Visi dan Misi</b>
                  </div>{" "}
                </ModalVisiMisi>
              </Menu.Item>
              <Menu.Item
                style={{
                  width: "100%",
                  margin: "0px 0 5px 0",
                  borderRadius: 0,
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <Modal7ProgramPrioritas>
                  <div className="menu-item">
                    <i class="bi bi-circle-fill"></i>
                    <b>7 Program Prioritas</b>
                  </div>
                </Modal7ProgramPrioritas>
              </Menu.Item>
              <Menu.Item
                style={{
                  width: "100%",
                  margin: "0px 0 16px 0",
                  borderRadius: 0,
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <Modal12Gerakan>
                  <div className="menu-item">
                    <i class="bi bi-circle-fill"></i>
                    <b>12 Gerakan Bersama Masyarakat</b>
                  </div>
                </Modal12Gerakan>
              </Menu.Item>

              <Menu.Item
                style={{
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: 0,
                  width: "100%",
                  margin: "0 0 16px 0",
                }}
              >
                <div className="menu-item">
                  <i class="bi bi-graph-up"></i>
                  <b>JUMLAH PENGUNJUNG</b>
                </div>{" "}
              </Menu.Item>
              <Menu.Item
                style={{
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: 0,
                  width: "100%",
                  height: "100%",
                  margin: "0 0 16px 0",
                }}
              >
                <div className="format-tanggal">
                  <i class="bi bi-calendar-week">Hari ini</i>
                  <span> 2 Orang</span>
                </div>
                <div className="format-tanggal">
                  <i class="bi bi-calendar3">Bulan Ini </i>
                  <span>10 Orang</span>
                </div>
                <div className="garis">
                  <hr />
                </div>
                <div className="format-tanggal">
                  <i class="bi bi-bar-chart-line">Total</i>
                  <span>12 orang</span>
                </div>
              </Menu.Item>
              <Menu.Item
                style={{
                  cursor: "default",
                  backgroundColor: "white",
                  borderRadius: 0,
                  height: "100%",
                  width: "100%",
                  margin: "25px 0 0 0",
                  color: "#EA2626",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: 0,
                  textAlign: "center",
                }}
              >
                <div className="tanggal-hari-ini">
                  <i class="bi bi-calendar3"></i>
                  {result}
                </div>
                <div
                  style={{
                    backgroundColor: "#EA2626",
                    color: "white",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="lingkaran">
                    <Clock format={"HH:mm:ss"} ticking={true} className="jam" />
                  </div>
                </div>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            className="content-form"
            style={{
              padding: "20px",
            }}
          >
            <InputFormPemkab />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default FormTamuPemkab;
