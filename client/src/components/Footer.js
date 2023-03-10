import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
      <footer className="footer sticky-footer">
        <p>&copy; Aníos Industries, Inc. {year}</p>
      </footer>
  );
}

export default Footer;
