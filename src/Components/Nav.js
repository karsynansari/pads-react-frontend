import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <header>
        <div>
          <h1>Pad's Healing Hand Salve</h1>
        </div>
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
  background-size: cover;
  font-family: sans-serif;
  margin-top: 80px;
  padding: 30px;

  header {
    background-color: gray;
    position: fixed;
    top: 5px;
    left: 5px;
    right: 5px;
    height: 80px;
    display: flex;
    align-items: center;
    h1 {
      position: center;
    }
    nav {
      color: green;
    }
  }
  header * {
    display: inline;
  }
`;

export default Nav;
