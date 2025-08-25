import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MainOptions,
  OptionCard,
  CardHeader,
  CardIcon,
  CardArrow,
  CardText,
  CardTitle,
  CardDesc,
  Services,
  ServiceBox,
  ServiceHeading,
  ServiceIcons,
  ServiceItem,
  IconWrapper,
  ServiceText,
} from "./style";

const ProfileDetails = () => {
  return (
    <div>
      <MainOptions>
        <OptionCard>
          <CardHeader>
            <CardIcon>
              <i className="fa-solid fa-landmark"></i>
            </CardIcon>
            <CardArrow>
              <i className="fa-solid fa-chevron-right"></i>
            </CardArrow>
          </CardHeader>
          <CardText>
            <CardTitle>XXXX 9820</CardTitle>
            <CardDesc>ICICI Bank | Chennai Egmore Branch</CardDesc>
          </CardText>
        </OptionCard>

        <OptionCard>
          <CardHeader>
            <CardIcon>
              <i className="fa-solid fa-landmark"></i>
            </CardIcon>
            <CardArrow>
              <i className="fa-solid fa-chevron-right"></i>
            </CardArrow>
          </CardHeader>
          <CardText>
            <CardTitle>Business Profile</CardTitle>
            <CardDesc>View and edit your business details</CardDesc>
          </CardText>
        </OptionCard>

        <OptionCard>
          <CardHeader>
            <CardIcon>
              <i className="fa-solid fa-landmark"></i>
            </CardIcon>
            <CardArrow>
              <i className="fa-solid fa-chevron-right"></i>
            </CardArrow>
          </CardHeader>
          <CardText>
            <CardTitle>KYC Verification</CardTitle>
            <CardDesc>Unlock exclusive benefits with KYC</CardDesc>
          </CardText>
        </OptionCard>

        <OptionCard>
          <CardHeader>
            <CardIcon>
              <i className="fa-solid fa-landmark"></i>
            </CardIcon>
            <CardArrow>
              <i className="fa-solid fa-chevron-right"></i>
            </CardArrow>
          </CardHeader>
          <CardText>
            <CardTitle>Order QR</CardTitle>
            <CardDesc>Get paid, manage & order QRs</CardDesc>
          </CardText>
        </OptionCard>
      </MainOptions>

      <Services>
        <ServiceBox>
          <ServiceHeading>BUSINESS SERVICES</ServiceHeading>
          <ServiceIcons>
            <ServiceItem>
              <IconWrapper>
                <i className="fa-solid fa-qrcode"></i>
              </IconWrapper>
              <ServiceText>Smart Speaker</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <IconWrapper>
                <i className="fa-solid fa-mobile-screen"></i>
              </IconWrapper>
              <ServiceText>POS Machine</ServiceText>
            </ServiceItem>
          </ServiceIcons>
        </ServiceBox>

        <ServiceBox>
          <ServiceHeading>MANAGE BUSINESS</ServiceHeading>
          <ServiceIcons>
            <ServiceItem>
              <IconWrapper>
                <i className="fa-solid fa-mobile-screen"></i>
              </IconWrapper>
              <ServiceText>Payment Settings</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <IconWrapper>
                <i className="fa-solid fa-mobile-screen"></i>
              </IconWrapper>
              <ServiceText>Manage Staff</ServiceText>
            </ServiceItem>
            <ServiceItem>
              <IconWrapper>
                <i className="fa-solid fa-mobile-screen"></i>
              </IconWrapper>
              <ServiceText>Change Language</ServiceText>
            </ServiceItem>
          </ServiceIcons>
        </ServiceBox>
      </Services>
    </div>
  );
};

export default ProfileDetails;
