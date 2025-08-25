import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 1000px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  background: radial-gradient(
    100% 533.55% at 100% 0%,
    #61ce70 0%,
    #42794a 100%
  );
  padding: 20px 40px;
  box-sizing: border-box;
`;

export const LeftSection = styled.div`
  width: 484px;
  height: 184px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 0%;
  font-weight: 600;
  line-height: 1.3;

  span {
    font-weight: 700;
  }
`;

export const SubTitle = styled.p`
  font-size: 16px;
  opacity: 0.9;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 10px 20px;
  background: #fff;
  color: #2d7a42;
  font-style: Gilroy;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
  }
`;

export const RightSection = styled.div`
  width: 271px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  
`;
