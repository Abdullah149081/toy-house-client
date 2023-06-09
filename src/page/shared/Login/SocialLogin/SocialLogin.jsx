import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProviders";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="text-center  text-accent font-bold">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-0.5 my-4 bg-gray-300 border-0 rounded " />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
          <h2 className="text-[#ff8c9a]">Or</h2>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4 divide-x-2 divide-y-2 divide-orange-500 divide-dotted  ">
        <span />
        <button onClick={handleGoogleLogin} type="button" className="btn rounded-full bg-[#F5F5F8] border-0 ">
          <FcGoogle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
