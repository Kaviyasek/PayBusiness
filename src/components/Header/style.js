import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: rgb(var(--white));
  box-shadow: 0px 2px 6px rgba(0,0,0,0.1);

  .logo {
    width: 50px;
    height: auto;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
`;
