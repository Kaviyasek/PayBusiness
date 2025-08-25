import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 948px;
  opacity: 1;
  margin: 60px 0 0 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.div`
  width: 1000px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const DownloadButton = styled.button`
  width: 242px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #42794a;
  background: transparent;
  padding: 12px 24px;
  cursor: pointer;
`;

export const SearchSection = styled.div`
  width: 1000px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
  border-radius: 12px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0 12px;
  font-size: 16px;
  outline: none;
`;

export const SearchIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #42794a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const InfoSection = styled.div`
  width: 1000px;
  height: 50px;
  border: 1px solid #42794a;
  border-radius: 16px;
  background: #eef8f2;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TimerIcon = styled.div`
  width: 34px;
  height: 34px;
  font-size: 20px;
`;

export const InfoText = styled.p`
  font-family: Gilroy, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  strong {
    font-weight: 700;
    color: black;
  }
`;

export const SettleButton = styled.button`
  width: 221px;
  height: 56px;
  border-radius: 8px;
  background: #42794a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

export const SettleButtonIcon = styled.div`
  width: 32px;
  height: 32px;
`;

export const SettleButtonText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

export const TableWrapper = styled.div`
  width: 1000px;
  height: 644px;
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

export const TableHeader = styled.th`
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #666;
`;

export const TableData = styled.td`
  padding: 16px;
  font-size: 14px;
`;

export const StatusTag = styled.span`
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) =>
    props.status === "Success"
      ? "#27ae60"
      : props.status === "Failed"
      ? "#e74c3c"
      : "#f39c12"};
  background: ${(props) =>
    props.status === "Success"
      ? "#eafaf1"
      : props.status === "Failed"
      ? "#fdecea"
      : "#fff5e6"};
`;

export const ViewLink = styled.a`
  color: #42794a;
  font-weight: 600;
  cursor: pointer;
`;

export const Pagination = styled.div`
  width: 376px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
`;

export const PageNumber = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${(props) => (props.active ? "#42794a" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
`;

export const PageArrow = styled.div`
  cursor: pointer;
`;
