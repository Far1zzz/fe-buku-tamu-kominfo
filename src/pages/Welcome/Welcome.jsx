import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        navigate("/video");
      }}
      className="bg-welcome"
    >
      <div className="click">KLIK DIMANA SAJA</div>
    </div>
  );
};

export default Welcome;
