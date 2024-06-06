"use client";
import { NavLink } from "react-router-dom";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
export default function Navbar() {
  return (
    <nav className="flex h-12 my-2 text-white px-6 items-center justify-between">
      <NavLink to="/" className=" flex items-center gap-2 ">
        <span>
          <PasswordOutlinedIcon />
        </span>
        <span className="text-xl font-bold">VaultMate</span>
      </NavLink>
      <ul className="flex gap-6">
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/your-passwords">Your-Passwords</NavLink>
        <NavLink to="https://github.com/daniyal-subhani" target="_blank">Github</NavLink>
      </ul>
    </nav>
  );
}
