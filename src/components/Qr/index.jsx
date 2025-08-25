import {
  PageContainer,
  Heading,
  Columns,
  LeftContainer,
  RightContainer, 
  Logo,
  QRCode,
  QRContent,
  QRLine,
  QRIcon,
  QRTextWrapper,
  QRName,
  ButtonRow,
  ActionButton,
  ButtonIcon,
  ButtonText,
} from "./style";
import Index from "../qrCodes"; 

import { Download, Share2, Copy } from "lucide-react";

export const ManageQr = () => {
  return (
    <PageContainer>
      <Heading>Manage QR/POS</Heading>
        <Columns>
        <LeftContainer>
          <Logo src="/images/pay-logo.png" alt="Logo" />
          <QRCode src="/images/qrcode.png" alt="QR Code" />

          <QRContent>
            <QRTextWrapper>
              <QRLine>
                <div>UPI ID: 9876543210@qpay</div>
                <QRIcon>
                  <Copy size={18} />
                </QRIcon>
              </QRLine>
              <QRName>Ibrahim Mohammedali</QRName>
            </QRTextWrapper>
          </QRContent>

          <ButtonRow>
            <ActionButton>
              <ButtonIcon>
                <Download size={24} />
              </ButtonIcon>
              <ButtonText>Download</ButtonText>
            </ActionButton>

            <ActionButton>
              <ButtonIcon>
                <Share2 size={24} />
              </ButtonIcon>
              <ButtonText>Share</ButtonText>
            </ActionButton>
          </ButtonRow>
        </LeftContainer>

         <RightContainer>
          <Index />
        </RightContainer>
      </Columns>
    </PageContainer>
  );
};

