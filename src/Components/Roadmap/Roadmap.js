import React from "react";
import Wrapper from "./Roadmap.styled";
// import images
import Lineimg from "../../images/svgline.svg";

function Roadmap() {
  return (
    <Wrapper>
      <h2 id="roadmap">Super Soldiers Roadmap</h2>
      <div className="roadmap-container">
        <img src={Lineimg} alt="line" className="lineimg" />
        <div className="roadmap first-text" data-aos="fade-up" data-aos-duration="3000">
          <div className="roadmap-text ">
            <p>
              25% sold out: Once 25% of the project is sold out, we will be donating 5 ETH (or the equivalent in pounds)
              to Combat Stress, the UK’s leading Veteran charity for mental health. Combat stress helps servicemen and
              women who suffer from mental problems such as: PTSD, depression and anxiety. A truly worthwhile cause and
              one that we feel very strongly about.
            </p>
          </div>
        </div>
        <div className="roadmap second-text" data-aos="fade-up" data-aos-duration="2500">
          <div className="roadmap-text ">
            <p>
              50% sold out: After 50% of the project is sold out, we will donate a further 5 ETH (or the equivalent in
              dollars) to Home for Our Troops, an American veteran charity dedicated to building and donating custom
              homes to severely injured 9/11 Veterans, in order to give them an opportunity to rebuild their lives.
            </p>
          </div>
        </div>
        <div className="roadmap third-text" data-aos="fade-up" data-aos-duration="2000">
          <div className="roadmap-text ">
            <p>
              75% sold out: When 75% of the project has sold out, the team will be allocating 10 ETH for sweeping the
              floor. Some of the Super Soldiers picked up will be given back to the community in the form of giveaways and
              others will be used to increase the floor price.
            </p>
          </div>
        </div>
        <div className="roadmap fourth-text" data-aos="fade-up" data-aos-duration="2500">
          <div className="roadmap-text ">
            <p>
              100% sold out: Once 100% of the project is sold out, we will give the community a chance to decide where
              the final 10 ETH (or equivalent in dollars/pounds) should be donated to. This can be a British or US
              veteran charity as to keep in line with the project thus far.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
