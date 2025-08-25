import {
  Container,
  Card,
  Heading,
  ContentWrapper,
  LeftContent,
  RightContent,
  Button,
} from "./style";

export const ProfileQR= () => {
  return (
    <Container>
      <Card>
        <Heading>Profile</Heading>
        <ContentWrapper>
          <LeftContent>
            <img
              src="./images/percentage.png"
              alt="progress"
              style={{ width: "120px", height: "120px" }}
            />
          </LeftContent>
          <RightContent>
            <h3>Complete your profile</h3>
            <ul>
              <li>Personal KYC</li>
              <li>Company KYC</li>
              <li>Onboarding details</li>
            </ul>
          </RightContent>
        </ContentWrapper>
        <Button>Next</Button>
      </Card>

      <Card>
        <Heading>QR</Heading>
        <ContentWrapper>
          <LeftContent>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=Example"
              alt="qr"
              style={{ width: "120px", height: "120px" }}
            />
          </LeftContent>
          <RightContent>
            <h3>Order QR</h3>
            <ul>
              <li>Receive Payment</li>
              <li>Order new QRs</li>
              <li>Download QR</li>
            </ul>
          </RightContent>
        </ContentWrapper>
        <Button>View more</Button>
      </Card>
    </Container>
  );
};
