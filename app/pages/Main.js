"use client";
import {NavLink} from "react-router-dom";
export default function Main() {
  return (
    <div className=" flex justify-between flex-row mt-20 p-6 pt-16 gap-4">
      <aside className="flex pt-8 gap-8 flex-col text-white w-[50%]">
        <h1 className="text-6xl p-2 mb-0 m-2 break-words font-semibold font-sans leading-tight">
          The Password Manager for Teams
        </h1>
        <p className="m-2 p-2 w-full pr-32">
          TeamPassword is the fastest, easiest and most secure way to store and
          share team logins and passwords.{" "}
        </p>
        <NavLink to="/form">
          <button className="bg-[#98D2EB] rounded-md w-fit m-[33px] ml-4 p-2">
            Get Started
          </button>
        </NavLink>
      </aside>
      <div className="m-1">
        <img
          className=""
          src="/assets/Marketing-bro.svg"
          alt="Image"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
}
