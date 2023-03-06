import { Modal } from "antd";
import { useState } from "react";
import Program from "../../assets/icons/7program.png";

const Modal7ProgramPrioritas = ({ children }) => {
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
              src="https://cdn.discordapp.com/attachments/1080330995624067122/1082145952971882506/7_PROGRAM.png"
              alt="none"
            />
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Modal7ProgramPrioritas;
