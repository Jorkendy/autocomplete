import React from "react";
import styled from "styled-components";

import { breakPoints } from "../utils/layout";
import { useTheme } from "../components/ThemeContext";

const Header = () => {
  const themeState = useTheme();

  return (
    <Wrapper>
      <LogoWrapper>
        <svg
          viewBox="0 0 1000 1000"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          style={{
            display: "block",
            ...(themeState.dark ? { fill: "#000" } : { fill: "#fff" })
          }}
        >
          <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path>
        </svg>
        {/*<Icon className="icon-angle-down" />*/}
      </LogoWrapper>
      <MobileMenu isDarkMode={themeState.dark}>
          <Switch>
              <input type="checkbox" onClick={() => themeState.toggle()} />
              <Slider isDarkMode={themeState.dark} />
          </Switch>
        <MobileMenuItem>Become a host</MobileMenuItem>
        <MobileMenuItem>Help</MobileMenuItem>
        <MobileMenuItem>Sign up</MobileMenuItem>
        <MobileMenuItem>Log in</MobileMenuItem>
      </MobileMenu>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  
  @media screen and (min-width: ${breakPoints.tabletL}px) {
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
  }
  
`;

const LogoWrapper = styled.div`
  display: flex;

  svg {
    width: 3em;
    height: 3em;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: ${breakPoints.tabletL - 1}px) {
    svg {
      width: 2em;
      height: 2em;
    }
  }
`;

const Icon = styled.span`
  color: #fff;
  font-size: 30px;
  margin-left: 10px;
  display: none;

  @media screen and (max-width: ${breakPoints.tabletL - 1}px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media screen and (max-width: ${breakPoints.tabletL - 1}px) {
    margin-top: 20px;
  }

  > a {
    color: ${props => (props.isDarkMode ? "black" : "white")};
    transition: all 0.3s ease;
  }
`;

const MobileMenuItem = styled.a`
  margin-left: 10px;
  font-weight: 700;
  
   @media screen and (min-width: ${breakPoints.tabletL}px) {
      margin-left: 30px;
  }
  
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 56px;
  height: 20px;
  
  @media screen and (max-width: ${breakPoints.tabletL - 1}px) {
   position: absolute;
   right: 15px;
   top: 15px;
  }

  input {
   display: none;
  }

  input:checked + span {
    background-color: #000;
  }

  input {
      &:focus + span {
        box-shadow: 0 0 1px #2196f3;
      }
    
      &:checked + span:before {
        transform: translate(31px,-50%);
      }
      
      + span {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #fff;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 34px;
          
         &:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 50%;
         }
      }
  }
`;

const Slider = styled.span`
  &:before {
    background-color: ${props => (props.isDarkMode ? "#fff" : "#000")};
  }
`;
