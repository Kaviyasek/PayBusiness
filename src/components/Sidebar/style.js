import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 240px;
  height: 828px;
  border-radius: 16px;
  border: 1px solid #42794a;
  background: #42794a;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin: 60px 0 0 80px;
  margin-bottom: 80px;
  color: #fff;
  font-family: sans-serif;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  transition: background 0.2s ease-in;

  &:hover {
    background: #36693e; 
  }

  &.active {
    background: #ffffff;
    color: #2d6241;
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  width: 240px;
  height: 66px;
  background: #ffffff;
  border-radius: 0 0 16px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 40px;
  }
`;
