import React from "react";
import { useNavigate } from "react-router-dom";

const VisiMisi = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        navigate("/profil-dinas");
      }}
      className="bg-visi-misi"
    ></div>
  );
};

export default VisiMisi;
