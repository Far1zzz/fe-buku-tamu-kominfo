import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilDinas = () => {
  const navigate = useNavigate();
  const [state, setState] = useState();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        navigate("/asal");
      }}
      className="bg-profil-dinas"
    >
      <div className="click-visi-misi">KLIK DIMANA SAJA</div>
    </div>
  );
};

export default ProfilDinas;
