import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import "../../assets/css/Webcam.css";

const videoConstraints = {
  width: "100%",
  height: "100%",
  facingMode: "user",
};

const WebcamUmum = ({ formData, setFormData }) => {
  const [preview] = useState("");
  const [image, setImage] = useState("");
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSource = webcamRef.current.getScreenshot();

    setImage(imageSource);
    setFormData({ ...formData, img: imageSource });

    console.log(imageSource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="webcam-form">
        <div className="webcam-img">
          {image === "" ? (
            <Webcam
              mirrored={true}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              style={{ borderRadius: "10px", width: "850px" }}
              videoConstraints={videoConstraints}
            />
          ) : (
            <img className="hasil-foto" src={image} alt="none" />
          )}
        </div>
        <br />
        <textarea
          style={{ display: "none" }}
          value={formData.img}
          onChange={(e) => {
            setFormData({ ...formData, img: e.target.value });
          }}
        />
        <div className="button-webcam">
          {image !== "" ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setImage("");
              }}
              className="webcam-btn"
            >
              <i class="bi bi-arrow-repeat"></i>
              <i class="bi bi-camera"></i>
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              className="webcam-btn"
            >
              <i class="bi bi-camera"></i>
            </button>
          )}
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="none" />
            </figure>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default WebcamUmum;
