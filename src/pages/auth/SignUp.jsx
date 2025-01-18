import { authAssets } from "./../../constants/index";

const Login = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${authAssets.loginBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-transperant shadow-[0px_4px_8px_4px_rgba(0,_0,_0,_0.1)] rounded-lg w-full max-w-5xl flex flex-col lg:flex-row-reverse">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex items-center justify-center bg-transperant w-2/3 rounded-l-lg">
          <img
            src={authAssets.loginImage}
            alt="Login page Illustration"
            className="w-4/5"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="name"
                id="name"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn bg-golden/70 text-white font-semibold hover:bg-golden w-full">
              Sign Up
            </button>
          </form>

          <div className="text-center mt-4">
            <p>
              Already registered?{" "}
              <a
                href="#register"
                className="text-golden font-semibold hover:underline"
              >
                Go to Login
              </a>
            </p>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-dark1 mb-4 font-semibold">
              Or sign up with
            </p>
            <div className="flex justify-center gap-6">
              <button className="btn btn-circle hover:scale-105 hover:shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.2)]">
                <img src={authAssets.facebookIcon} alt="facebook icon" />
              </button>
              <button className="btn btn-circle hover:scale-105 hover:shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.2)]">
                <img src={authAssets.googleIcon} alt="google icon" />
              </button>
              <button className="btn btn-circle hover:scale-105 hover:shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.2)]">
                <img src={authAssets.githubIcon} alt="github icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;