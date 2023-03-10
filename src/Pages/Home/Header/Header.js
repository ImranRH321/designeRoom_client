import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken")
  };
  const navbar = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">HotelRooM</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={logout}
            className="btn  btn-warning hover:bg-red-600  "
          >LogOut</button>
        ) : (
          <button className="btn  btn-success   ">
            <Link to="login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
