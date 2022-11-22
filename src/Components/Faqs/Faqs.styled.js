import styled from "styled-components";

const Wrapper = styled.div`
  margin: 50px 0;
  .faqs-container {
    width: 80%;
    margin: auto;
    @media (max-width: 768px) {
      width: 95%;
    }
    @media (max-width: 600px) {
      width: calc(100% - 20px);
      margin: 0 10px;
    }
    h2 {
      margin-bottom: 41px;
    }
  }
  .accordion-container {
    background: #484729;
    box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: hidden;
    margin-top: 35px;
    padding: 0 40px;
    transition: 0.5s ease-out;
    :hover {
      transform: scale(1.05);
    }
    @media (max-width: 768px) {
      padding: 0 20px;
    }
    .accordion-item {
      background: #484729;
      color: #fff;
      cursor: pointer;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 20px;
      font-weight: 600;
      transition: 0.4s;
      padding: 20px 0;
      padding-right: 40px;
      position: relative;
      @media (max-width: 600px) {
        font-size: 16px;
      }
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/plus.svg?color=white") no-repeat center center / contain;
      }
    }
    .active {
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/minus.svg?color=white") no-repeat center center / contain;
      }
    }
    .panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      p {
        background: #545334;
        box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 20px 40px;
        margin-top: 50px;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        @media (max-width: 600px) {
          font-size: 15px;
        }
      }
    }
  }
`;

export default Wrapper;
