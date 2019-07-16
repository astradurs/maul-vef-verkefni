import React, { Fragment } from "react";
import styled from "styled-components";
import lunch600 from "../../images/lunch-600w.jpg";

import "../styles.css";

import palette from "../palette";
const { yellow_vivid_400 } = palette;

function Header() {
  const HeroHead = styled.div`
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 50vh;
    position: relative;
    display: flex;
    /*background-color: ${yellow_vivid_400};*/
    background-image: ${() => `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      url(${lunch600})`};
    font-family: sans-serif;
    text-align: center;
  `;

  const ImageText = styled.h1`
    background-size: cover;
    background-position: top;
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
  `;

  const ResponsiveH5Text = styled.p`
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  `;

  return (
    <Fragment>
      <HeroHead>
        <ImageText>Hér er texti</ImageText>
      </HeroHead>
    </Fragment>
  );
}

export default Header;
