import { Layout, Menu } from "antd";
import React from "react";
import "../../assets/css/FormInstansiLuar.css";
import Clock from "react-live-clock";
import InputFormInstansiLuar from "../../components/InputFormInstansiLuar/InputFormInstansiLuar";

const { Header, Content, Sider } = Layout;

const FormTamuInstansiLuar = () => {
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
      <Header
        className="header-buku-tamu"
        style={{
          color: "white",
          backgroundBlendMode: "darken",
          boxShadow: "0px 4px 4px #ffffff",
        }}
      >
        <h5>E-Buku</h5>
      </Header>
      <Content>
        <Layout>
          <Sider
            width={250}
            style={{
              height: "100%",
              backgroundColor: "#4E2222",
            }}
          >
            <Menu
              style={{
                background: "#4E2222",
                color: "white",
                padding: "50px 0 0 0",
              }}
            >
              <Menu.Item
                style={{
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: 0,
                  width: "100%",
                  margin: "0 0 18px 0",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "17px",
                }}
              >
                <i class="bi bi-houses"></i> <b>Menu</b>
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
                <i class="bi bi-circle-fill"></i> <b>Visi dan Misi</b>
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
                <i class="bi bi-circle-fill"></i> <b>7 Program Prioritas</b>
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
                <i class="bi bi-circle-fill"></i>{" "}
                <b>12 Gerakan Bersama Masyarakat</b>
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
                JUMLAH PENGUNJUNG
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
                <div className="hari-ini">
                  Hari ini <span> 2 Orang</span>
                </div>
                <div className="bulan-ini">
                  Bulan Ini <span>10 Orang</span>
                </div>
                <hr style={{ width: "100%" }} />
                <div className="total-pengunjung">
                  Total <span>12 orang</span>
                </div>
              </Menu.Item>
              <Menu.Item
                style={{
                  cursor: "default",
                  backgroundColor: "white",
                  borderRadius: 0,
                  height: "100%",
                  width: "100%",
                  margin: "53px 0 0 0",
                  color: "#EA2626",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: 0,
                  textAlign: "center",
                }}
              >
                <div>{result}</div>
                <div
                  style={{
                    backgroundColor: "#EA2626",
                    color: "white",
                    padding: "10px",
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
            <InputFormInstansiLuar />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default FormTamuInstansiLuar;
