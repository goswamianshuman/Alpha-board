/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Header() {
  return (
    <div className="w-full py-4 shadow-lg ">
      <div className="flex items-center justify-center gap-3 h-full bg-white w-max px-4 py-2 rounded-md mx-auto">
        {/* logo */}
        <img className="h-10 w-10 rounded-full" src="/images/logo.png" />
        {/* title */}
        <h1 className="uppercase tracking-wider text-black">Alpha board</h1>
      </div>
    </div>
  );
}

export default Header;
