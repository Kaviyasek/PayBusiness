import styled from "styled-components";

export const StatsContainer = styled.div`
  width: 984px;
  height: 140px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  opacity: 1;
`;

export const StatBox = styled.div`
  width: 234px;
  height: 140px;
  border-radius: 12px;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #2e7d32;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #555;
    margin: 4px 0 0;
  }
`;
