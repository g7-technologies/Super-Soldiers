import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 100vh;
  @media (max-width: 575px) {
    height: auto;
    padding-top: 80px;
  }
  div {
    img {
      width: 100%;
      @media (max-width: 575px) {
        height: 55vh;
      }
    }
  }
`;

export default Wrapper;
