import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProviders";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      setPasswordError("Use 6 characters or more for your password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        updateUserProfile(newUser, name, photo);
        logOut();
        navigate("/sign-in");
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPasswordValue(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Use 6 characters or more for your password");
    } else {
      setPasswordError("");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen  lg:py-4  toy-container">
      <div className="flex justify-center gap-12">
        <div className="w-1/2 lg:block hidden">
          <img className="animate-pulse" src="https://i.ibb.co/L66W6Tw/login.jpg" alt="login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm ">
          <h2 className="text-center text-4xl text-[#ff8c9a] font-bold mt-12">Sign Up to Toy House</h2>
          <form onSubmit={handleRegister} className="card-body flex-none">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-accent font-medium">Name</span>
              </label>
              <input type="text" placeholder="Your name" name="name" className="input input-bordered text-gray-800" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-accent font-medium">Email</span>
              </label>
              <input type="email" placeholder="Your email" name="email" className="input input-bordered text-gray-800" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-accent font-medium">Photo URL</span>
              </label>
              <input type="url" placeholder="Your Photo Url" name="photo" className="input input-bordered text-gray-800" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-accent font-medium">Password</span>
              </label>
              <input
                onChange={handlePassword}
                type={showPassword ? "text" : "password"}
                placeholder="6+ characters"
                value={passwordValue}
                name="password"
                className={`input input-bordered font-medium text-gray-800 ${passwordError && "border-2 border-red-500 "}`}
              />
              {passwordError && <span className="text-error font-bold text-xs mt-4">{passwordError}</span>}
            </div>

            <button onClick={handleShowPassword} className="text-gray-900 font-bold text-start" type="button">
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
            {error && <span className="text-error font-bold text-xs mt-2">{error}</span>}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-toy">
                Sign Up
              </button>
            </div>
          </form>
          <SocialLogin />
          <p className="mt-4 text-center text-gray-800 font-medium">
            Already a member?
            <Link className="text-primary text-xs link-hover ml-2" to="/sign-in">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
