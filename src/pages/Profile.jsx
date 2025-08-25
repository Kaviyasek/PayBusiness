import styled from "styled-components";
import {Header} from "../components/Header";
import {Sidebar} from "../components/Sidebar";
import {Banner} from "../components/Banner";
import ProfileDetails from "../components/profileDetails";


export const Profile = () => {
  return (
    <ProfileContainer>
      <Header />
      <MainContent>
        <Sidebar />
        <ContentArea>
          <Banner />
          <ProfileDetails />
        </ContentArea>
      </MainContent>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const ContentArea = styled.div`
  flex: 1;
  margin-top: 40px;
  padding: 20px;
  background: #f9f9f9;
`;
