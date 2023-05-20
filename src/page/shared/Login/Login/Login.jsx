import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../../../PageTitle/PageTitle";
import { AuthContext } from "../../../../providers/AuthProviders";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen toy-container">
      <PageTitle title="Sign In" />
      <div className=" flex justify-center gap-12 ">
        <div className="w-1/2 lg:block hidden">
          <img className="animate-pulse" src="https://i.ibb.co/L66W6Tw/login.jpg" alt="login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  ">
          <h2 className="text-center text-4xl text-[#ff8c9a] font-bold mt-12">Sign in to Toy House</h2>
          <form onSubmit={handleLogin} className="card-body flex-none">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-accent font-medium">Email</span>
              </label>
              <input type="email" name="email" placeholder="Your email" className="input input-bordered text-gray-800" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-accent font-medium">Password</span>
              </label>
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Your password" className="input input-bordered text-gray-800" />
              <label className="label">
                <button type="button" className="label-text-alt link link-hover text-lg text-accent">
                  Forgot password?
                </button>
              </label>
            </div>
            <button onClick={handleShowPassword} className="text-gray-900 font-bold text-start" type="button">
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
            {error && <span className="text-error font-bold text-xs mt-2">{error}</span>}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-toy">
                Sign In
              </button>
            </div>
          </form>
          <SocialLogin />
          <p className="mt-4 text-center text-gray-800 font-medium">
            Not a member?
            <Link className="text-primary text-xs link-hover ml-2" to="/sign-up">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
