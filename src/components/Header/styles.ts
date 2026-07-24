import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 0.5rem 0.5rem;
  .ant-row-space-between {
    align-items: center;
    text-align: center;
    > div {
      margin: 0;
    }
  }
  position: fixed;
  width: 100%;
  background-color: #f5f5f5;
  z-index: 1;










  @media only screen and (max-width: 890px) {
    padding: 1rem 0.5rem;
  }

`;
export const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const LogoH1 = styled("h1")`
  font-size: 30px;
  margin: 0;
  color: #096192;
`;

export const LogoH3 = styled("h3")`
  font-size: 20px;
  margin: 0;
  color: #096192;
`;

export const LogoImg = styled("img")`
  width: 128px;
  margin-top: 0;
  opacity: 0.789
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 939px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 939px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #353839;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }

  &.active span {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) solid underline;
  }

  button {
    margin-top: 0;




  }
`;
export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) solid underline;
  }

  > button {
    box-shadow: none;
  }
`;
