import { useState, useEffect } from "react";
import img1 from "../../../public/security1.png";
import { RiArrowLeftLine } from "react-icons/ri";
import { HiOutlineBackspace } from "react-icons/hi2";
import check from "../../../public/CHECK.png";
import { Link } from "react-router-dom";
import { useCreatePin } from "../../hooks/Auth";
import { useUser } from "../../hooks/Auth";
import { useNavigate } from "react-router-dom";

const PasswordInputScreen = () => {
  const [password, setPassword] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const handleNumberClick = (num: string) => {
    if (password.length < 4) {
      setPassword(password + num);
    }
  };

  const handleBackspace = () => {
    setPassword(password.slice(0, -1));
  };

  const { success, isLoading, createPinFn } = useCreatePin();

  const handleSubmit = () => {
    if (password.length === 4) {
      setPassword(password);
      setIsTrue(true);
    }

    createPinFn({ pin: password });
  };

  useEffect(() => {
    if (!user) {
      navigate("/on-boarding");
    }
  }, [user, navigate]);

  return (
    <div className={`flex flex-col px-3 py-5 gap-8 relative`}>
      <RiArrowLeftLine />
      <div>
        <h2 className="text-3xl font-medium">Security</h2>
        <p className="">Create a Pin to secure your account</p>
      </div>

      <div className="w-[100%] flex justify-center">
        <img src={img1} alt="" className="w-[60%]" />
      </div>

      <div className="flex justify-center gap-8 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <input
            key={index}
            type="password"
            value={password[index] || ""}
            readOnly
            className="w-14 h-14 rounded-xl border-2 border-gray-300 text-center text-xl focus:outline-none focus:border-primary"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="w-full h-12 text-xl"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => handleNumberClick("0")}
          className="w-full h-12 text-xl col-start-2 col-end-3"
        >
          0
        </button>

        <button
          className="w-full h-12 text-xl flex justify-center"
          onClick={handleBackspace}
        >
          <HiOutlineBackspace className="mt-3" size={30} />
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-blue-500 text-white rounded-lg"
      >
        {isLoading ? "Setting..." : "Set Pin"}
      </button>

      {success && (
        <div className="absolute top-0 left-0 w-[100%] h-full z-10 flex flex-col justify-end bg-[rgba(0,0,0,0.4)]">
          <div className=" bg-white py-20 px-3 rounded-t-2xl flex items-center flex-col gap-7">
            <img src={check} alt="" />
            <h1 className="font-semimedium text-xl">Successful</h1>
            <p className="text-sm text-gray-500">
              You have successfully set up a password
            </p>
            <Link to={"/"} className="w-full">
              <button className="font-medium text-white bg-primary w-full py-4 rounded-3xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordInputScreen;
