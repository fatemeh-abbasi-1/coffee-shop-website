import Section from "../../atoms/Section/Section";
import MiniHeader from "../../molecules/MiniHeader/MiniHeader";
import CardPaymentForm from "../../molecules/CardPaymentForm/CardPaymentForm";
import PayDetails from "../../molecules/PayDetails/PayDetails";

const PaySection = () => {
  return (
    <Section backgroundColor={"bg-main-background-secondary"}>
      <MiniHeader />
      <div className="flex justify-center">
        <div className="flex justify-center flex-col-reverse p-10 gap-8 bg-dark_brown2 w-[900px] border border-mocha h-fit">
          <CardPaymentForm />
          <PayDetails />
        </div>
      </div>
    </Section>
  );
};

export default PaySection;
