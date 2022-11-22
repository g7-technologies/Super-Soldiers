import React from "react";
import Wrapper from "./Homebanner.styled";

import Homebannerimg from "../../images/homebanner.png";

function Homebanner() {
  return (
    <Wrapper>
      <div id="home">
        <img src={Homebannerimg} alt="homebanner" />
      </div>
    </Wrapper>
  );
}

export default Homebanner;
