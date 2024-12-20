import { Link } from "react-router-dom";

interface Props {
  next: () => void;
}

const OnB2 = ({ next }: Props) => {
  return (
    <div className="pb-3 flex flex-col ">
      <img src="./ob2.png" className="w-full mx-auto object-contain" alt="" />

      <div className="steps">
        <div className="line !bg-white !opacity-100" />
        <div className="line !bg-white !opacity-100" />
        <div className="line" />
      </div>

      <div className="onboarding_container">
        <p className="text-[22px] font-medium">Explore Key Features</p>
        <p className="text-sm">
          Buy data bundles and airtime for any network, Pay electricity and
          other utility bills, services like GOtv.
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

export default OnB2;
