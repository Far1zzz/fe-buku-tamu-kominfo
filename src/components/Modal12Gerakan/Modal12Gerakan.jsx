import { Modal } from "antd";
import { useState } from "react";
import Gerakan from "../../assets/icons/12gerakan.png";

const Modal12Gerakan = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="modal-content">
        <div
          style={{ cursor: "pointer" }}
          color="inherit"
          className="media"
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
            <img
              src="https://media.discordapp.net/attachments/1080330995624067122/1082169530773688340/12_GERAKAN_BERSAMA_MASYARAKAT.png?width=892&height=595"
              alt="none"
            />
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Modal12Gerakan;
