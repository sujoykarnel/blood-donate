import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-red-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="font-bold text-red-600">Blood Donate</span>
        </p>
        <p>
          Developed By <span className="font-bold">Sujoy Karnel</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
