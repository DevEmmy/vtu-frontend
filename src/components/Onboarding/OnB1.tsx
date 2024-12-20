import { Link } from "react-router-dom";

interface Props {
  next: () => void;
}

const OnB1 = ({ next }: Props) => {
  return (
    <div className="flex flex-col pb-3">
      <img src="./ob1.png" className="w-full object-contain" alt="" />

      <div className="steps">
        <div className="line !bg-white !opacity-100" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="onboarding_container">
        <p className="text-[22px] font-medium">Welcome to VTU!</p>
        <p className="text-sm">
          Hi there! We're excited to have you on board. VTU is your one-stop app
          for all your payment needs.
        </p>

        <button
          className=" bg-primary text-white font-semimedium py-2 px-10 rounded-full"
          onClick={next}
        >
          Next
        </button>
        <Link to={"/new-account"}>
          <p className="text-xs">skip</p>
        </Link>
      </div>
    </div>
  );
};

export default OnB1;
