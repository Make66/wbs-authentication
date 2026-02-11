import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 mt-8">
      <p className="text-center text-gray-300 text-sm py-9">
        &copy; {new Date().getFullYear()} Martin K. & Adrian K. - All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
