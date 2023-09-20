import styled from 'styled-components';
import girl from '../images/girl-bg-1.png';

export const StyledContainer = styled.div`
  max-height: 100%;
  background-color: #ebc183;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 100vh;
    background-image: url(${girl});
    background-repeat: no-repeat;
    /* background-size: contain; */
    background-size: cover;
    background-attachment: fixed;
    /* background-position: center; */
    background-position: center 0;
  }
`;

export const StyledImgWrapper = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  border-left: 10px solid white;
  border-right: 10px solid white;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledFormWrapper = styled.div`
  margin: 0 auto;
  padding: 12px;
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    background-color: #ebc1837d;
  }
`;
