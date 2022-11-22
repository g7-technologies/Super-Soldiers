import styled from "styled-components";

const Wrapper = styled.nav`
  min-height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 992px) {
    position: relative;
    justify-content: space-between;
    padding: 0 50px;
  }
  @media (max-width: 600px) {
    padding: 0 10px;
  }
  .nav-logo {
    display: flex;
    justify-content: center;
    p {
      font-size: 32px;
      font-weight: 700;
      font-family: "Play", sans-serif;
    }
  }
  .nav-link-container {
    display: flex;
    @media (max-width: 992px) {
      position: absolute;
      left: 0%;
      top: 100%;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #576a37;
      transition: 0.5s ease-out;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 992px) {
        flex-direction: column;
        margin-left: 50px;
        margin-right: 50px;
        width: 100%;
        padding-bottom: 20px;
      }
      li {
        margin: 0 15px;
        @media (max-width: 992px) {
          width: 100%;
        }
        a {
          text-decoration: none;
          color: #ffffff;
          display: block;
          @media (max-width: 992px) {
            text-align: center;
          }
        }
      }
      .nav-link-last-item {
        margin-right: 80px;
        @media (max-width: 992px) {
          margin: 0;
        }
      }
      .social-media-icon {
        display: flex;
        @media (max-width: 992px) {
          justify-content: center;
        }
        a {
          margin: 0 5px;
          font-size: 30px;
        }
      }
      .nav-button {
        @media (max-width: 992px) {
          text-align: center;
        }
        a {
          background: #576a37;
          padding: 7px 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
  .mobile-menu {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      button {
        border: none;
        color: #ffffff;
        font-size: 30px;
        background: transparent;
      }
    }
  }
`;
export default Wrapper;
