import styled from "styled-components";

export const ToggleWrapper = styled.div`
  width: 426px;
  height: 50px;
  display: flex;
  gap: 2px;
  border-radius: 8px;
  border: 1px solid #42794A;
  padding: 4px;
`;

export const ToggleButton = styled.button`
  width: 208px;
  height: 42px;
  border-radius: ${(props) => (props.active ? "4px" : "8px")};
  padding: 12px 16px;
  background: ${(props) => (props.active ? "#42794A" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  font-family: Gilroy, sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const Container = styled.div`
  width: 426px;
  height: 484px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
`;

export const QRCard = styled.div`
  width: 424px;
  height: 97px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background: #fff;
  padding: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

export const QRImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 10.67px;
  border: 1.33px solid #ccc;
`;

export const QRContent = styled.div`
  width: 202px;
  height: 97px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const QRNumber = styled.div`
  font-family: Gilroy, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  text-align: left;
`;

export const QRText = styled.div`
  font-family: Gilroy, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
`;

export const TerminalText = styled.div`
  font-family: Gilroy, sans-serif;
  font-weight: 500;
  font-size: 16px;
  background: #999999;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  width: fit-content;
`;

export const RequestButton = styled.button`
  width: 426px;
  height: 50px;
  margin-top: 20px;
  border-radius: 8px;
  background: #42794A;
  color: white;
  font-size: 16px;
  font-family: Gilroy, sans-serif;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
