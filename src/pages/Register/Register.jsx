import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const {
    setUser,
    createUserFunc,
    emailVerificationFunc,
    updateProfileFunc,
    logOutFunc,
    signInGoogle,
  } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const photoURL = e.target.photo?.value;
    const password = e.target.password?.value;

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least 1 uppercase letter, 1 lowercase letter, and be 6+ characters long."
      );
      return;
    }

    // console.log({ displayName, email, photoURL, password });

    createUserFunc(email, password)
      .then((result) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            emailVerificationFunc().then((res) => {
              logOutFunc()
                .then(() => {
                  navigate("/");
                  toast.success(
                    "Signup successful. Check your email to validate your account."
                  );
                })
                .catch((e) => {
                  console.log(e);
                  toast.error(e.message);
                });
            });
          })
          .catch((error) => {
            console.log(error);
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e);
        if (e.code === "auth/email-already-in-use") {
          toast.error("An account with this email already exists.");
        } else if (e.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters long.");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check and try again.");
        } else if (e.code === "auth/user-not-found") {
          toast.error(
            "No account found with this email. Please sign up first."
          );
        } else if (e.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error(
            "This account has been disabled. Please contact support."
          );
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many failed attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("This operation is not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else {
          toast.error(
            e.message || "An unexpected error occurred. Please try again."
          );
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("SignIn successfully");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  const handleShowButton = () => {
    setShow(!show);
  };

  return (
    <div>
      <title>Register</title>
      <div className="card bg-base-100 mx-auto mt-5 border border-gray-200 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />

              {/* photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo url"
              />

              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={handleShowButton}
                  type="button"
                  className="btn btn-xs absolute top-6 right-7"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <Link to={"/login"} className="text-gray-800">
                Already have an account?{" "}
                <span className="text-purple-500">Login here</span>
              </Link>

              <button className="btn btn-neutral mt-4">Register</button>

              {/* Google */}
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
