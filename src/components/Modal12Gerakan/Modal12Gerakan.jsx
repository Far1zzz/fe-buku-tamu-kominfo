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
            <img src={Gerakan} alt="none" />
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Modal12Gerakan;
