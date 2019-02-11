// Footer component

import React from "react";

// ===================================================================
// Footer component
// ===================================================================

function Footer() {
  return (
    <>
      <div className="fixed-bottom" style={{ opacity: ".7", textAlign: "right", paddingRight: "10px", backgroundColor: "black", height: "25px" }}>
        <a href="https://www.richtrevillian.com/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Julius Sans One", color: "white", textDecoration: "none", letterSpacing: ".15rem", fontSize: ".8rem" }}>
          © richard trevillian
        </a>
      </div>
    </>
  );
}

export default Footer;
