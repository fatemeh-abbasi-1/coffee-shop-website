import Modal from "../molecules/Modal/Modal";
import PaySection from "../organisms/PaySection/PaySection";

const PayPage = () => {
  return (
    <>
      <Modal message={"Successful payment will reach you in a few moments."} />
      <PaySection />
    </>
  );
};

export default PayPage;
