import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import { ModalProps } from "./type";

import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";

const Modal: React.FC<ModalProps> = ({ message }) => {
  const openModal = useSelector((state: RootState) => state.products.openModal);
  return (
    <div
      className={` flex bg-transparent w-full h-screen items-center justify-center z-10 ${
        !openModal ? "hidden" : ""
      } 
   
      `}
    >
      <div className="bg-creamy_white border-mocha border-2 rounded-2xl justify-center items-center p-14 w-[400px] flex flex-col gap-7">
        <Text className="text-dark_brown1">Message send succesfully.</Text>
        <div className="flex gap-3">
          <Button className="text-mocha">Ok</Button>
          <Button variant="large-secondary">Back To Home</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
