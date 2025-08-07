// import { useSelector } from "react-redux";
// import { RootState } from "../../../app/store";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../../app/store";
// import { changeModalState } from "../../../features/products/productSlice";

import { ModalProps } from "./type";

import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Modal: React.FC<ModalProps> = ({
  message,
  link = "/home",
  showOkButton = true,
}) => {
  // const modalState = useSelector(
  //   (state: RootState) => state.products.modalState
  // );
  // const dispatch = useDispatch<AppDispatch>();

  // const closeModal = () => {
  //   dispatch(changeModalState());
  // };

  const [modalState, setModalState] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 flex bg-transparent w-full h-screen items-center justify-center z-50 ${
        !modalState ? "hidden" : ""
      }
      backdrop-blur-sm bg-black/30
      `}
    >
      <div className="bg-creamy_white border-mocha border-2 rounded-2xl justify-center items-center p-14 w-[500px] flex flex-col gap-7">
        <Text className="text-dark_brown1">{message}</Text>
        <div className="flex gap-3">
          {showOkButton && (
            <Button
              className="text-mocha"
              onClick={() => setModalState(!modalState)}
            >
              Ok
            </Button>
          )}
          {link && (
            <Button
              variant="large-secondary"
              onClick={() => setModalState(!modalState)}
            >
              <Link to={link}>Go to {link.slice(1)}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
