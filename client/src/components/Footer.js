import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
      <footer className="footer">
        <p>&copy; Aníos Industries, Inc. {year} Photo by <a href="https://unsplash.com/@_theaestheticz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jorge Simmons-Valenzuela</a> on <a href="https://unsplash.com/@_theaestheticz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
      </footer>
  );
}

export default Footer;
