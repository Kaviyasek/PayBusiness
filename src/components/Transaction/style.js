import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 396px;
  display: flex;
  margin-top: 60px;
  gap: 20px;
`;

export const Card = styled.div`
  width: 490px;
  height: 396px;
  border-radius: 16px;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  padding: 10px 16px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 14px;
  color: #666;
`;

export const Amount = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Arrow = styled.div`
  font-size: 20px;
  color: #666;
  padding-right: 40px;

`;

export const Content = styled.div`
  width: 490px;
  height: 324px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  justify-content: space-between;
`;

export const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const NameDate = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    color: #000;
  }

  span {
    font-size: 12px;
    color: #777;
  }
`;

export const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  padding-right: 40px;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #2f6d3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #265c31;
  }
`;
