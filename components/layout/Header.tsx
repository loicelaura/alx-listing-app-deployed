import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <nav className="hidden sm:flex gap-4 text-gray-700 text-sm font-medium">
          <a href="#">Rooms</a>
          <a href="#">Mansion</a>
          <a href="#">Countryside</a>
          <a href="#">Beachfront</a>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-1 text-sm focus:outline-none"
        />
        <button className="text-sm font-medium text-blue-700 hover:underline">
          Sign In
        </button>
        <button className="bg-blue-700 text-white px-4 py-1 rounded-md text-sm">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;