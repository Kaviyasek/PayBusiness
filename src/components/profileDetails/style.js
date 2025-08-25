import styled from "styled-components";

export const MainOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  width: 1000px;
`;

export const OptionCard = styled.div`
  background: #f0f9f3;
  padding: 24px;
  border-radius: 14px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const CardIcon = styled.div`
  background: #42794a;
  color: #ffffff;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const CardArrow = styled.div`
  color: #42794a;
  font-size: 24px;
`;

export const CardText = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  color: #42794a;
  font-size: 24px;
  white-space: nowrap;
  margin-bottom: 8px;
`;

export const CardDesc = styled.p`
  font-size: 20px;
  color: #999999;
`;

export const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 16px;
  width: 1000px;

`;

export const ServiceBox = styled.div`
  background: #fff;
  padding: 24px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 1px 1px #eeeeee;
`;

export const ServiceHeading = styled.h4`
  font-size: 14px;
  color: #999999;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const ServiceIcons = styled.div`
  display: flex;
  gap: 14px;
`;

export const ServiceItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWrapper = styled.div`
  background: #fff;
  border: 1px solid #f0f5f1;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 80px;
  height: 80px;

  i {
    font-size: 32px;
    color: #2f7a3b;
  }
`;

export const ServiceText = styled.p`
  font-size: 14px;
  color: #252525;
  margin-top: 10px;
`;
