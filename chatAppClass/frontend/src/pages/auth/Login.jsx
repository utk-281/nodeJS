import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { axiosInstance } from "../../lib/axios";
import { useAppStore } from "../../store";
import { AUTH_ROUTES } from "../../utils/constants";

const Login = () => {
  const navigate = useNavigate();

  const { setUserInfo } = useAppStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      let { data } = await axiosInstance.post(AUTH_ROUTES.LOGIN, {
        email,
        password,
      });
      console.log(data.message);

      if (data.success) {
        toast.success(data.message);
        setUserInfo(data.payload);
        if (data.payload.profileSetup) navigate("/chat");
        else navigate("/profile");
      }
    } catch (error) {
      //   console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(34,40,49)] via-[rgb(57,62,70)] to-[rgb(34,40,49)] flex items-center justify-center p-4 transition-all duration-500">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[rgb(0,173,181)] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[rgb(238,238,238)] rounded-full opacity-5 animate-pulse delay-700"></div>
      </div>

      {/* Main login card with glow effect */}
      <div className="w-full max-w-md z-10">
        <div className="bg-linear-to-br from-[rgb(57,62,70)] to-[rgb(34,40,49)] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[rgb(0,173,181)]/20 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,173,181,0.3)]">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-linear-to-r from-[rgb(0,173,181)]/0 via-[rgb(0,173,181)]/5 to-[rgb(0,173,181)]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 relative">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-[rgb(0,173,181)] to-[rgb(57,62,70)] rounded-full sm:rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-7 sm:w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[rgb(238,238,238)] mb-2 transition-all duration-300">
              Welcome Back
            </h1>
            <p className="text-[rgb(238,238,238)]/70 text-sm sm:text-base">
              Sign in to your chat account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 sm:space-y-6">
            {/* Email Field */}
            <div className="group">
              <label
                className="block text-[rgb(238,238,238)] text-sm font-medium mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-[rgb(0,173,181)]"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[rgb(0,173,181)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-[rgb(34,40,49)]/50 border-2 border-[rgb(57,62,70)] text-[rgb(238,238,238)] placeholder-[rgb(238,238,238)]/50 rounded-lg pl-10 pr-4 py-2 sm:py-3 focus:outline-none focus:border-[rgb(0,173,181)] focus:ring-2 focus:ring-[rgb(0,173,181)]/30 transition-all duration-300 hover:border-[rgb(0,173,181)]/50"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <label
                className="block text-[rgb(238,238,238)] text-sm font-medium mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-[rgb(0,173,181)]"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[rgb(0,173,181)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full bg-[rgb(34,40,49)]/50 border-2 border-[rgb(57,62,70)] text-[rgb(238,238,238)] placeholder-[rgb(238,238,238)]/50 rounded-lg pl-10 pr-4 py-2 sm:py-3 focus:outline-none focus:border-[rgb(0,173,181)] focus:ring-2 focus:ring-[rgb(0,173,181)]/30 transition-all duration-300 hover:border-[rgb(0,173,181)]/50"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Forgot Password Link */}
              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-[rgb(0,173,181)] hover:text-[rgb(238,238,238)] text-sm transition-all duration-300 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            {/* <div className="flex items-center group">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 bg-[rgb(34,40,49)] border-2 border-[rgb(57,62,70)] rounded focus:ring-[rgb(0,173,181)] text-[rgb(0,173,181)] transition-all duration-300 hover:border-[rgb(0,173,181)]/50 cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-[rgb(238,238,238)] text-sm transition-colors duration-300 group-hover:text-[rgb(0,173,181)] cursor-pointer"
              >
                Remember me
              </label>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-[rgb(0,173,181)] to-[rgb(0,150,181)] hover:from-[rgb(57,62,70)] hover:to-[rgb(34,40,49)] text-[rgb(238,238,238)] font-medium py-2 sm:py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[rgb(0,173,181)]/30 hover:border-[rgb(0,173,181)]"
              onClick={(e) => handleLogin(e)}
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4 sm:my-6">
              <div className="flex-grow border-t border-[rgb(57,62,70)]"></div>
              <span className="mx-4 text-[rgb(238,238,238)]/50 text-sm">
                or continue with
              </span>
              <div className="flex-grow border-t border-[rgb(57,62,70)]"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center bg-[rgb(34,40,49)] hover:bg-[rgb(57,62,70)] text-[rgb(238,238,238)] py-2 rounded-lg border border-[rgb(57,62,70)] hover:border-[rgb(0,173,181)]/30 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
              <button
                type="button"
                className="flex items-center justify-center bg-[rgb(34,40,49)] hover:bg-[rgb(57,62,70)] text-[rgb(238,238,238)] py-2 rounded-lg border border-[rgb(57,62,70)] hover:border-[rgb(0,173,181)]/30 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                  fill="#4285F4"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.796 4.178-1.147 1.146-2.933 2.062-6.053 2.062-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Google
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-[rgb(238,238,238)]/70 text-sm">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className="text-[rgb(0,173,181)] hover:text-[rgb(238,238,238)] font-medium transition-all duration-300 hover:underline"
              >
                Register here
              </span>
            </p>
          </div>

          <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-[rgb(238,238,238)]/50 border-t border-[rgb(57,62,70)] pt-3 sm:pt-4 transition-all duration-300">
            <p>Secure login with end-to-end encryption</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
