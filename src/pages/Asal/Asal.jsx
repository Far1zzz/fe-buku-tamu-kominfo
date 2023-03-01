import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Asal.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="content-dashboard">
        <div
          className="area-pemkab"
          onClick={(e) => {
            e.preventDefault();
            navigate("/area-pemkab");
          }}
        >
          <button>Area Pemkab Banyuasin</button>
        </div>
        <div
          className="instansi-luar"
          onClick={(e) => {
            e.preventDefault();
            navigate("/instansi-luar/umum");
          }}
        >
          <button>Instansi Luar/Umum</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
