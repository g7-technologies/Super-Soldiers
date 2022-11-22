import styled from "styled-components";
import Backgroundsvg from "../../images/backgroundsvg1.png";

const Wrapper = styled.div`
  background: url(${Backgroundsvg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 300px;
  @media (max-width: 700px) {
    padding-bottom: 400px;
    padding-top: 0;
  }
  @media (max-width: 1024px) {
    padding-bottom: 50px;
  }
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
  .roadmap-container {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 600px;
    @media (max-width: 1024px) {
      height: auto;
    }
    @media (max-width: 768px) {
      height: auto;
    }
    .lineimg {
      text-align: center;
      height: 600px;
      @media (max-width: 1024px) {
        display: none;
      }
    }
    .roadmap {
      position: absolute;
      max-width: 500px;
      width: 100%;
      @media (max-width: 1024px) {
        position: static;
        margin-top: 20px;
      }
      @media (max-width: 768px) {
        position: static;
        margin: auto;
        margin-top: 20px;
      }
      .roadmap-text {
        background: linear-gradient(118.81deg, rgba(196, 196, 196, 0.23) 3.58%, rgba(196, 196, 196, 0.08) 98.45%);
        padding: 10px;
        font-size: 19px;
        font-weight: 400;
        line-height: 1.5;
        border-radius: 5px 5px 5px 0;
        p {
          color: #d9d4d4;
        }
      }
      h5 {
        font-size: 30px;
        font-weight: 600;
        display: inline-block;
        padding: 10px;
        background: linear-gradient(118.81deg, rgba(196, 196, 196, 0.23) 3.58%, rgba(196, 196, 196, 0.08) 98.45%);
        border-radius: 0 0 5px 5px;
      }
    }
    .first-text {
      left: 8%;
      top: 0;
      @media (max-width: 1250px) {
        left: 4%;
      }
      @media (max-width: 1200px) {
        left: 0%;
      }
      @media (min-width: 1025px) and (max-width: 1107.99px) {
        max-width: 460px;
      }
    }
    .second-text {
      right: 10%;
      top: 30%;
      @media (max-width: 1250px) {
        right: 4%;
      }
      @media (min-width: 1108px) and (max-width: 1199.98px) {
        right: 4%;
      }
      @media (min-width: 1025px) and (max-width: 1107.99px) {
        right: 2%;
        max-width: 480px;
      }
      @media (max-width: 1024px) {
        margin-left: auto;
      }
    }
    .third-text {
      left: 8%;
      top: 80%;
      @media (max-width: 1250px) {
        left: 1%;
      }
      @media (max-width: 1024px) {
        top: 70%;
      }
      @media (min-width: 1025px) and (max-width: 1107.99px) {
        max-width: 460px;
      }
    }
    .fourth-text {
      right: 10%;
      top: 105%;
      @media (max-width: 1250px) {
        right: 4%;
      }
      @media (max-width: 1024px) {
        margin-left: auto;
      }
      @media (min-width: 1025px) and (max-width: 1107.99px) {
        max-width: 460px;
      }
    }
  }
`;
export default Wrapper;
