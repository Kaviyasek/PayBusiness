import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { SettlementHistory } from "../components/settlementHistory";
import styled from "styled-components";

const PageLayout = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;      
  width: 500px;
  height: 730px;

`;

export const History = () => {
  return (
    <div>
      <Header />
      <PageLayout>
        <Sidebar />
        <MainContent>
          <SettlementHistory/>
        </MainContent>
      </PageLayout>
    </div>
  );
};
