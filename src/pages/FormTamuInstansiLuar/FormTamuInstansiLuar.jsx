import { Layout, Menu } from "antd";
import React from "react";
import "../../assets/css/FormInstansiLuar.css";

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
          backgroundBlendMode: "darken",
          boxShadow: "0px 4px 4px #ffffff",
        }}
      >
        E-BUKU TAMU
      </Header>
      <Content>
        <Layout>
          <Sider
            width={250}
            style={{
              height: "100%",
              padding: "5px",
              backgroundColor: "#4E2222",
            }}
          >
            <Menu
              style={{
                background: "#4E2222",
                color: "white",
                padding: "10px 0 0 0",
                margin: 0,
              }}
            >
              <Menu.Item
                style={{
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: 0,
                  width: "100%",
                  margin: "0 0 5px 0",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                }}
              >
                MENU
              </Menu.Item>
              <Menu.Item
                style={{
                  width: "100%",
                  height: "170px",
                  margin: "20px 0 20px 0",
                  border: "1px solid white",
                  borderRadius: 0,
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              ></Menu.Item>

              <Menu.Item
                style={{
                  background:
                    "radial-gradient(96.83% 12280.84% at 3.17% 50%, #EA2626 0%, rgba(255, 255, 255, 0) 100%)",
                  borderRadius: 0,
                  width: "100%",
                  margin: "0 0 5px 0",
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
                  margin: "0 0 5px 0",
                }}
              >
                <div>Hari ini</div>
                <div>Bulan Ini</div>
                <hr style={{ width: "100%" }} />
                <div>Total</div>
              </Menu.Item>
              <Menu.Item
                style={{
                  backgroundColor: "white",
                  borderRadius: 0,
                  height: "100%",
                  width: "100%",
                  margin: "0 0 5px 0",
                  color: "#EA2626",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                <div>{result}</div>
                <div style={{ backgroundColor: "black" }}>JAM</div>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: "20px",
              minHeight: "100%",
              backgroundColor: "black",
              border: "1px solid white",
            }}
          >
            <div className="content"></div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default FormTamuInstansiLuar;
