import React from "react";
import Wrapper from "./Team.styled";

// import images and icons
import Member1 from "../../images/member1.png";
import Member2 from "../../images/member2.png";
import Member3 from "../../images/member3.png";

function Team() {
  return (
    <Wrapper>
      <div className="team-title" id="team">
        <h2>Super Soldiers Team</h2>
      </div>
      <div className="team-container">
        <div className="team-member">
          <div className="member-img">
            <img src={Member1} alt="member" />
          </div>
          <div className="member-body">
            <h4>CJ</h4>
            <p>Project Manager</p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-img">
            <img src={Member2} alt="member" />
          </div>
          <div className="member-body">
            <h4>Kate</h4>
            <p>
              Social Media Manager <br /> and Marketing <br /> Director{" "}
            </p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-img">
            <img src={Member3} alt="member" />
          </div>
          <div className="member-body">
            <h4>Debbie</h4>
            <p>Chief Financial Operator </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Team;
