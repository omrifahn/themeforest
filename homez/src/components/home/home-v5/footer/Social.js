import React from "react";
import Constants from "@/constants";
const Social = () => {
  const socialIcons = [
    "fab fa-linkedin-in",
  ];

  return (
    <div className="social-style1 d-flex align-items-center justify-content-end">
      <h6 className="text-white mb-0">Follow Us</h6>
      {socialIcons.map((iconClass, index) => (
        <a key={index} href={Constants.LINKDIN_URL}>
          <i className={iconClass + " list-inline-item"} />
        </a>
      ))}
    </div>
  );
};

export default Social;
