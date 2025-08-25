import { Container } from "./style"; 

export const Header = () => {
  return (
    <Container>
      <img src="/images/header-logo.png" alt="Logo" className="logo" />
      <div className="profile">
        <span>Hello</span>
        <img src="/images/profile-pic.png" alt="User" />
        <span>Thomas Shelby</span>
      </div>
    </Container>
  );
};
