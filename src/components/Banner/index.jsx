import {
  BannerContainer,
  LeftSection,
  RightSection,
  Title,
  SubTitle,
  Button,
  BannerImage,
} from "./style";

export const Banner = () => {
  return (
    <BannerContainer>
      <LeftSection>
        <Title>
          Pay ₹1/<span>month*</span> for the QPay POS Device
        </Title>
        <SubTitle>One device for accepting all modes of payments</SubTitle>
        <Button>Download App Now!</Button>
      </LeftSection>
      <RightSection>
        <BannerImage src="/images/bill.png" alt="POS Device" />
      </RightSection>
    </BannerContainer>
  );
};
