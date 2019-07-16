import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./styles.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
