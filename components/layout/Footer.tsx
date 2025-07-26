import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
      <p>© {new Date().getFullYear()} ALX Listing App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;