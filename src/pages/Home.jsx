import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Banner } from '../components/Banner';
import { Stats } from '../components/Counts';
import { ProfileQR} from '../components/profileQr';
import { Transactions} from '../components/Transaction';

import styled from 'styled-components';

const PageLayout = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; 

  width: 1000px;
  height: 1314px;
  gap: 20px;

  position: absolute;
  top: 120px;
  left: 360px;

  opacity: 1;
`;

export const Home = () => {
  return (
    <div>
      <Header />
      <PageLayout>
        <Sidebar />
        <MainContent>
          <Banner />
          <Stats />
          <ProfileQR />
          <Transactions/>
        </MainContent>
      </PageLayout>
    </div>
  );
};
