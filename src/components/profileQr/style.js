import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 392px;
  display: flex;
  gap: 20px;
  opacity: 1;
`;

export const Card = styled.div`
  width: 490px;
  height: 392px;
  border-radius: 16px;
  border: 1px solid #eeeeee;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  background: #fff;
`;

export const Heading = styled.h4`
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #999999;
`;

export const ContentWrapper = styled.div`
  width: 426px;
  height: 184px;
  display: flex;
  gap: 33px;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightContent = styled.div`
  width: 209px;
  height: 128px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-family: Gilroy, sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  ul {
    padding-left: 16px;
    margin: 0;
    color: #666;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  width: 426px;
  height: 56px;
  border-radius: 12px;
  padding: 16px 24px;
  background: #42794a;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
