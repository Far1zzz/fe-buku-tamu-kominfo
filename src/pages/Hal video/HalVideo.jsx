import React from "react";
import { useNavigate } from "react-router-dom";
import Video from "../../assets/vid/video.mp4";

const HalVideo = () => {
  const navigate = useNavigate();

  return (
    <div
    // onClick={(e) => {
    //   e.preventDefault();
    //   navigate("/visi-misi");
    // }}
    >
      <video
        onEnded={() => {
          navigate("/visi-misi");
        }}
        autoPlay
        className="bg-vid"
      >
        <source type="video/mp4" src={Video} />
      </video>
    </div>
  );
};

export default HalVideo;
