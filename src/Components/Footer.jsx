import React, { forwardRef } from "react";
import "../styles/Footer.css";

function Footer(props, ref) {
  return (
    <div ref={ref} className="footer">
      Footer
    </div>
  );
}

export default forwardRef(Footer);
