import styled from "styled-components";
import Backgroundimg from "../../images/TeamBackground.png";

const Wrapper = styled.div`
  background: url(${Backgroundimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: cover;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 50px;
  .team-title {
    text-align: center;
    h2 {
      margin-bottom: 80px;
      @media (max-width: 600px) {
        margin-bottom: 40px;
      }
    }
  }
  .team-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .team-member {
      margin: 15px;
      padding: 15px;
      background: linear-gradient(115.19deg, rgba(196, 196, 196, 0.23) 3.77%, rgba(196, 196, 196, 0.08) 103.77%);
      border-radius: 16px;
      text-align: center;
      min-height: 350px;
      transition: 0.5s ease-out;
      :hover {
        transform: scale(1.1);
      }
      .member-body {
        margin-top: 20px;
        line-height: 1.5;
      }
    }
  }
`;

export default Wrapper;
