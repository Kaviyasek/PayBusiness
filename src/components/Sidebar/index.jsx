import { SidebarContainer, NavList, NavItem, Footer } from "./style";
import { Home, QrCode, Clock, User } from "lucide-react";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <NavList>
          <NavItem to="/" end>
            <Home size={20} /> Home
          </NavItem>
          <NavItem to="/manage-qr">
            <QrCode size={20} /> QR
          </NavItem>
          <NavItem to="/settlement-history">
            <Clock size={20} /> History
          </NavItem>
          <NavItem to="/profile">
            <User size={20} /> Profile
          </NavItem>
        </NavList>
      </div>
      <Footer>
        <img src="/images/bharat-logo.png" alt="Bharat Connect" />
      </Footer>
    </SidebarContainer>
  );
};
