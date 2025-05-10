import { ReactNode } from "react";
import Modal from "./Modal";

const ModalWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Modal />
    </>
  );
};

export default ModalWrapper;
