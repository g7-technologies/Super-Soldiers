import React from "react";
import Wrapper from "./Faqs.styled";

function Faqs() {
  // accordion open function
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <Wrapper>
      <div className="faqs-container" id="faq">
        <h2>FAQ’S</h2>
        <div className="container-row">
          <div className="row-col">
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>How much will a Solider cost?</button>
              <div className="panel">
                <p>0.06 ETH plus gas.</p>
              </div>
            </div>
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>Is there a limit on how many Soldiers you can mint?</button>
              <div className="panel">
                <p>No! There is no limit to the number of Soldiers you can mint.</p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">When will the artwork be revealed?</button>
              <div className="panel">
                <p>The artwork will be revealed 3 days following public mint.</p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">When will the Soldiers be available to mint?</button>
              <div className="panel">
                <p>TBC (check socials for updates)</p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">When will donations take place following the mint?</button>
              <div className="panel">
                <p>Donations will take place in the following weeks after public sale.</p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">When will the Smart contract uploaded?</button>
              <div className="panel">
                <p>The smart contract will be uploaded when it goes live.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faqs;
