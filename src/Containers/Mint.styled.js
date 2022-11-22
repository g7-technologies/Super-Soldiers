import styled from "styled-components";
import MintBackground from "../images/mintbackground.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${MintBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 850px) {
    background-size: contain;
  }
  .mintbutton-group {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 580px) {
      flex-direction: column;
    }
    .counter-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(94.35deg, rgba(196, 196, 196, 0.59) 0%, rgba(196, 196, 196, 0.46) 102.79%);
      padding: 5px;
      border-radius: 10px;
      max-width: 250px;
      width: 100%;
      .counter {
        text-align: center;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        font-weight: bold;
        color: #576a37;
        padding: 0 50px;
      }
      button {
        border: none;
        color: #ffffff;
        background: #576a37;
        width: 40px;
        height: 40px;
        font-size: 18px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    .button {
      margin-left: 50px;
      width: 250px;
      @media (max-width: 580px) {
        margin-left: 0;
        margin-top: 30px;
      }
      button {
        background: #576a37;
        width: 100%;
        padding: 20px;
        border: none;
        color: #ffffff;
        font-size: 18px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
      }
    }
    .connect_button {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      width: 250px;
      @media (max-width: 580px) {
        margin-left: 0;
        margin-top: 30px;
      }
      button {
        text-align: center;
        background: #576a37;
        width: 100%;
        padding: 20px;
        border: none;
        color: #ffffff;
        font-size: 18px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
      }
      a {
        text-align: center;
        background: #576a37;
        width: 100%;
        padding: 20px;
        border: none;
        color: #ffffff;
        font-size: 18px;
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;
        font-weight: bold;
      }
      a:hover {
        background: #576a37;
        width: 100%;
        padding: 20px;
        border: none;
        color: #ffffff;
        font-size: 18px;
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
  h4 {
    color: #ffffff;
    font-size: 33px;
    font-weight: 700;
  }
  .center_align {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
  }
  .right_align {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
  }
  .text_danger {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    color: #ffffff;
    background-color: #dc3545b3;
    margin-bottom: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 20px;
  }
`;
export default Wrapper;
