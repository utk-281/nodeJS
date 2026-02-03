import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "../../components/ui/spinner";
import { axiosInstance } from "../../lib/axios";
import { AUTH_ROUTES } from "../../utils/constants";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(email, password);
    try {
      let resp = await axiosInstance.post(AUTH_ROUTES.REGISTER, {
        email,
        password,
      });
      console.log(resp);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[rgb(34,40,49)] via-[rgb(57,62,70)] to-[rgb(34,40,49)] flex items-center justify-center p-4 transition-all duration-500">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[rgb(0,173,181)] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[rgb(238,238,238)] rounded-full opacity-5 animate-pulse delay-700"></div>
      </div>

      {/* Main registration card with glow effect */}
      <div className="w-full max-w-md z-10">
        <div className="bg-linear-to-br from-[rgb(57,62,70)] to-[rgb(34,40,49)] rounded-2xl shadow-2xl p-6 sm:p-8 border border-[rgb(0,173,181)]/20 relative overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,173,181,0.3)]">
          {/* Glow effect on hover */}
          {/* <div className="absolute inset-0 bg-linear-to-r from-[rgb(0,173,181)]/0 via-[rgb(0,173,181)]/5 to-[rgb(0,173,181)]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div> */}

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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[rgb(238,238,238)] mb-2 transition-all duration-300">
              Create Account
            </h1>
            <p className="text-[rgb(238,238,238)]/70 text-sm sm:text-base">
              Join our secure chat community
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
            </div>

            {/* Confirm Password Field */}
            <div className="group">
              <label
                className="block text-[rgb(238,238,238)] text-sm font-medium mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-[rgb(0,173,181)]"
                htmlFor="confirm-password"
              >
                Confirm Password
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  id="confirm-password"
                  type="password"
                  className="w-full bg-[rgb(34,40,49)]/50 border-2 border-[rgb(57,62,70)] text-[rgb(238,238,238)] placeholder-[rgb(238,238,238)]/50 rounded-lg pl-10 pr-4 py-2 sm:py-3 focus:outline-none focus:border-[rgb(0,173,181)] focus:ring-2 focus:ring-[rgb(0,173,181)]/30 transition-all duration-300 hover:border-[rgb(0,173,181)]/50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-[rgb(57,62,70)] to-[rgb(34,40,49)] hover:from-[rgb(0,173,181)] hover:to-[rgb(0,150,181)] text-[rgb(238,238,238)] font-medium py-2 sm:py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[rgb(0,173,181)]/30 hover:border-[rgb(0,173,181)]"
              //   disabled={loading}
              onClick={(e) => handleRegister(e)}
            >
              {loading ? <Spinner className="mx-auto" /> : "Register"}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-[rgb(238,238,238)]/70 text-sm">
              Already have an account?{" "}
              <a
                href="#"
                className="text-[rgb(0,173,181)] hover:text-[rgb(238,238,238)] font-medium transition-all duration-300 hover:underline"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-[rgb(238,238,238)]/50 border-t border-[rgb(57,62,70)] pt-3 sm:pt-4 transition-all duration-300">
            <p>By registering, you agree to our Terms & Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
