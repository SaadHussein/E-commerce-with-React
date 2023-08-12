import React from "react";
import { googleLogo, githubLogo } from "../assets";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setTimeout(() => {
          navigate("/");
        }, 1500);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center smallTab:gap-10 gap-4">
        <div
          onClick={handleGoogleLogin}
          className="text-base smallTab:w-60 w-48 smallTab:h-12 h-10 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img src={googleLogo} alt="Google Logo" className="w-8" />
          <span className="mobile:text-sm text-[12px] text-gray-900">
            Sign in with Google
          </span>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white smallTab:text-base mobile:text-[12px] text-[10px] py-3 smallTab:px-8 mobile:px-5 px-3 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center smallTab:gap-10 gap-4">
        <div className="text-base smallTab:w-60 w-48 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img src={githubLogo} alt="Google Logo" className="w-8" />
          <span className="mobile:text-sm text-[12px] text-gray-900">
            Sign in with GitHub
          </span>
        </div>
        <button className="bg-black text-white smallTab:text-base mobile:text-[12px] text-[10px] py-3 smallTab:px-8 mobile:px-5 px-3 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        rtl={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
