import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0px 50px 100px 50px;
  @media (max-width: 600px) {
    padding: 0px 20px 100px 20px;
  }
  h2 {
    margin: 0;
  }
  .about-container {
    margin-top: 80px;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    > div {
      width: 50%;
      @media (max-width: 768px) {
        width: 90%;
      }
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    .about-img {
      min-height: 600px;
      @media (max-width: 768px) {
        min-height: 600px;
      }
      @media (max-width: 500px) {
        min-height: 330px;
      }
      position: relative;
      margin: auto;
      img {
        position: absolute;
        left: 50%;
        top: 28%;
        transform: translate(-70%, -70%);
        width: 250px;
        border-radius: 16px;
        filter: drop-shadow(0px 4px 95px #576a37);
        :last-child {
          transform: translate(-40%, 10%);
        }
        @media (max-width: 500px) {
          width: 180px;
        }
      }
    }
    .about-text {
      div {
        margin-bottom: 30px;
        h4 {
          font-size: 29px;
          font-weight: 500;
          line-height: 1.5;
        }
        p {
          font-size: 20px;
          font-weight: 500;
          line-height: 1.5;
        }
      }
    }
  }
`;

export default Wrapper;
