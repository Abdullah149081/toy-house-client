import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen toy-container">
      <div className=" flex justify-center gap-12 ">
        <div className="w-1/2 lg:block hidden">
          <img src="https://i.ibb.co/L66W6Tw/login.jpg" alt="login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  ">
          <h2 className="text-center text-4xl text-[#ff8c9a] font-bold mt-12">Sign in to Toy House</h2>
          <form className="card-body">
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
              <input type="password" name="password" placeholder="Your password" className="input input-bordered text-gray-800" />
              <label className="label">
                <button type="button" className="label-text-alt link link-hover text-lg text-accent">
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-toy">
                Sign In
              </button>
            </div>

            <p className="mt-4 text-center text-gray-800 font-medium">
              Not a member?
              <Link className="text-primary text-xs link-hover ml-2" to="/sign-up">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
