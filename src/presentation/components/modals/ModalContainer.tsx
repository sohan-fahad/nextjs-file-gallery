import { Modal, ModalPositions, ModalSizes } from "flowbite-react";
import React from "react";

type ChildrenProps = {
  children: string | JSX.Element | JSX.Element[];
  closeModal: () => void;
  isShow: boolean;
  size?: keyof ModalSizes;
  position?: keyof ModalPositions;
};

const ModalContainer = ({
  children,
  isShow,
  size = "lg",
  position = "center",
  closeModal,
}: ChildrenProps) => {
  return (
    <>
      <Modal show={isShow} size={size} onClose={closeModal} position={position}>
        <div className="absolute right-0 top-2 p mt-2 mr-2">
          <button onClick={closeModal}>
            <svg
              className="w-6"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </Modal>
    </>
  );
};

export default ModalContainer;
