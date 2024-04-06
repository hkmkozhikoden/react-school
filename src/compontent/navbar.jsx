import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo1 from '../assets/logo/logo-t.png';
import Menu from "../assets/icons/menu.png";
import Close from "../assets/icons/close.png";

const StyledHeader = styled.header`
  background-color: #b61e53;
  color: #fff;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }

  img {
    max-height: 60px;
    max-width: 70px;
  }
  .menuToggleBtn
  {
    display:none
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .menuToggleBtn {
      display: block;
      position: absolute;
      right: 20px;
      top: 0px;
      cursor: pointer;
    }
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content:end;

  li {
    margin: 0;
    padding: 0;

    &:hover {
      cursor: pointer;
      color: #44a8f4;
      border-radius: 4px;
    }
  }

  .nav-menu-list {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 10px 10px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;
const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleMenu = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <>
      <StyledHeader>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src={Logo1} alt="Logo" />
            </div>
            <div className="col-8">
              <NavMenu isToggleOpen={isToggleOpen} >
                <li>
                  <Link to={"/"} className="nav-menu-list">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className="nav-menu-list">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/blogs"} className="nav-menu-list">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to={"/gallery"} className="nav-menu-list">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className="nav-menu-list">
                    Contact
                  </Link>
                </li>
              </NavMenu>
              <div className="menuToggleBtn" onClick={toggleMenu}>
                {isToggleOpen ?  <img src={Close} alt="close"/> : <img src={Menu} alt="menu"/>  }
              </div>
            </div>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default Navbar;
