import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ManageQr } from "../components/Qr";
import styled from "styled-components";

const PageLayout = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;       
  width: 500px;
  height: 730px;

`;

export const ManageQR = () => {
  return (
    <div>
      <Header />
      <PageLayout>
        <Sidebar />
        <MainContent>
          <ManageQr />
        </MainContent>
      </PageLayout>
    </div>
  );
};
