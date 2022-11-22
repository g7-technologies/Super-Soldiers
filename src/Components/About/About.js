import React from "react";
import Wrapper from "./About.styled";

// import images and icons
import Aboutimg1 from "../../images/aboutimg1.png";
import Aboutimg2 from "../../images/aboutimg2.png";

function About() {
  return (
    <Wrapper>
      <h2 id="about">ABOUT US</h2>
      <div className="about-container">
        <div className="about-img">
          <img src={Aboutimg1} alt="someone" />
          <img src={Aboutimg2} alt="someone" />
        </div>
        <div className="about-text">
          <div>
            <p>
              Super Soldiers NFT was inspired by the hard work and sacrifice of our countrymen and
              women. The 10,000 Soldiers living on the Ethereum blockchain provide a small token of our
              appreciation and respect to those who have served for our countries and protected our
              freedom. Through this project, the team will be giving back to US and UK based Veteran
              charities, as well as giving back to the community for their support.
            </p>
          </div>
          <div>
            <p>
              Celebrating the Army, Air Force and Navy of both the UK and US Military, some Soldiers will
              come dressed wearing the hat/helmet and/or uniform of the respective branch, being
              assigned the rank of private, captain or colonel. This is determined by blue, red and green
              badges on their uniform.
            </p>
          </div>
          <div>
            <p>
              The 10,000 Soldiers will come with an assortment of awesome characteristics and features.
              From holding bullets within their teeth to RPG’s strapped to their back, these Soldiers won’t
              only look the part, but also feel badass. Create your own army by acquiring multiple Soldiers
              from different military branches!
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
