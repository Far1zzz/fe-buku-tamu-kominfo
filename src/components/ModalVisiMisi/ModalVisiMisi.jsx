import React from "react";
import { Modal } from "antd";
import { useState } from "react";
import VisiMisi from "../../assets/img/Visi-Misi.png";

const ModalVisiMisi = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div
          style={{ cursor: "pointer" }}
          color="inherit"
          onClick={() => setOpen(true)}
        >
          {children}
        </div>
        <Modal
          className="modal-content"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
          footer={null}
        >
          <div className="content-modal">
            <img src={VisiMisi} alt="none" />
          </div>
        </Modal>
      </div>
    </>
  );
};
export default ModalVisiMisi;
