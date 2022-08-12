import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <header>
        <h1>Pad's Healing Hand Salve</h1>
        <nav>
          <ul>
            <ul>placeholder1</ul>
            <ul>placholder2</ul>
            <ul>placeholder3</ul>
          </ul>
        </nav>
      </header>
    </StyledNav>
  );
}

export const StyledNav = styled.div`
  height: 125vh;
  position: relative;
  background-size: cover;
  font-family: sans-serif;
  margin-top: 80px;
  padding: 30px;
  font-family: "Times New Roman", Times, serif;
  color: blue;

  header {
    background-color: gray;
    position: fixed;
    top: 5px;
    left: 5px;
    right: 5px;
    height: 80px;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  nav {
    display: inline-block;
    position: absolute;
    top: 0px;
    right: 0px;
  }
  header * {
    display: inline;
  }
`;

export default Nav;
