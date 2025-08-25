import styled from "styled-components";

export const PageContainer = styled.div`
  width: 1000px;
  height: 784px;
  margin: 35px 0 0 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Heading = styled.h1`
  font-family: Gilroy, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #252525;
`;

export const Columns = styled.div`
  display: flex;
  gap: 100px; 
`;

export const LeftContainer = styled.div`
  flex: 1;         
  max-width: 400px; 
`;

export const RightContainer = styled.div`
  flex: 2;        
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Logo = styled.img`
  width: 72px;
  height: 62px;
  margin-left: 180px;
`;

export const QRCode = styled.img`
  width: 426px;
  height: 426px;
`;

export const QRContent = styled.div`
  width: 270px;
  border-radius: 16px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
`;

export const QRTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const QRLine = styled.div`
  display: flex;
  align-items: center;
  font-weight:700 ;
  gap: 6px;
`;

export const QRIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const QRName = styled.p`
  font-family: Gilroy, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #999999;
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  width: 424px;
  height: 56px;
  margin-top: 30px;
`;

export const ActionButton = styled.button`
  width: 204px;
  height: 56px;
  border-radius: 8px;
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 16px 12px;
  border: none;
  cursor: pointer;
`;

export const ButtonIcon = styled.div`
  width: 24px;
  height: 24px;
`;

export const ButtonText = styled.span`
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
`;
