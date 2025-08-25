import { useState } from "react";
import {
  ToggleWrapper,
  ToggleButton,
  Container,
  QRCard,
  QRImage,
  QRContent,
  QRNumber,
  QRText,
  TerminalText,
  RequestButton,
} from "./style";

const qrData = [
  { id: 1, number: "Q201946579", text: "All Marketing Sales- MS1903041155331648980231", terminal: "Terminal 1" },
  { id: 2, number: "Q201946579", text: "All Marketing Sales- MS1903041155331648980231", terminal: "Terminal 2" },
  { id: 3, number: "Q201946579", text: "All Marketing Sales- MS1903041155331648980231", terminal: "Terminal 3" },
  { id: 4, number: "Q201946579", text: "All Marketing Sales- MS1903041155331648980231", terminal: "Terminal 3" },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div>
      <ToggleWrapper>
        <ToggleButton
          active={activeTab === "active"}
          onClick={() => setActiveTab("active")}
        >
          Active QR Codes
        </ToggleButton>
        <ToggleButton
          active={activeTab === "requests"}
          onClick={() => setActiveTab("requests")}
        >
          QR Code Requests
        </ToggleButton>
      </ToggleWrapper>

      <Container>
        {qrData.map((qr) => (
          <QRCard key={qr.id}>
            <QRImage
              src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=example"
              alt="QR Code"
            />
            <QRContent>
              <QRNumber>{qr.number}</QRNumber>
              <QRText>{qr.text}</QRText>
              <TerminalText>{qr.terminal}</TerminalText>
            </QRContent>
          </QRCard>
        ))}
      </Container>

      <RequestButton>Request more QR Codes</RequestButton>
    </div>
  );
}
