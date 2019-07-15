import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import lunch600 from "../images/lunch-600w.jpg";

import "./styles.css";

import palette from "./palette";
const { yellow_vivid_400, yellow_vivid_200 } = palette;

function App() {
  const HeroHead = styled.div`
    background-size: cover;
    background-position: top;
    height: 50vh;
    width: 98vw;
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
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
  `;

  const ResponsiveH5Text = styled.p`
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  `

  return (
    <Fragment>
      <HeroHead><ImageText>Hér er texti</ImageText></HeroHead>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
