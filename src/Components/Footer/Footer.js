import React from "react";
import Wrapper from "./Footer.styled";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <Wrapper>
      <div className="footer-title">
        <p>Super Soldiers</p>
      </div>
      <div className="footer-social-icons">
        <a target="blank" href="https://twitter.com/SuperSoldierNFT">
          <Icon icon="entypo-social:twitter-with-circle" />
        </a>
        <a target="blank" href="https://www.instagram.com/supersoldiersnft/">
          <Icon icon="entypo-social:instagram-with-circle" />
        </a>
      </div>
    </Wrapper>
  );
}

export default Footer;
