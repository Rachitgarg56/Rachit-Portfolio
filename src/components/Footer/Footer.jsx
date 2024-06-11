import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rachitgarg56@gmail.com</span>
        <div className="f-icons">
          <LinkedIn onClick={()=>window.location.href="https://www.linkedin.com/in/rachitgarg56/"} color="white" size={"3rem"} />
          <Gitub onClick={()=>window.location.href="https://github.com/Rachitgarg56/"} color="white" size={"3rem"} />
          <Instagram onClick={()=>window.location.href="https://github.com/Rachitgarg56/"} color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
