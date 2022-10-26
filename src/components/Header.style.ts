import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  height: 83px;
  align-items: center;

  & .navLogo {
    height: 62px;
    margin-left: 48px;
  }

  & .navLinks {
    margin-right: 59px;
  }

  & .user {
    font-weight: 400;
    font-size: 24px;
    line-height: 25px;
    color: #76bb4c;
    text-decoration: none;
  }

  & .btn-goBack {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #6033aa;
    text-decoration: none;
  }
`;
