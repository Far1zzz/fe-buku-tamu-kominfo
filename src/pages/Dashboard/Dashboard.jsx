import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="header" style={{ backgroundBlendMode: "darken" }}>
        Dari Mana Anda Berasal ?
      </div>
      <div className="content-dashboard">
        <div
          className="area-pemkab"
          onClick={(e) => {
            e.preventDefault();
            navigate("/area-pemkab");
          }}
        >
          Area Pemkab Banyuasin
        </div>
        <div
          className="instansi-luar"
          onClick={(e) => {
            e.preventDefault();
            navigate("/instansi-luar/umum");
          }}
        >
          Instansi Luar/Umum
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
