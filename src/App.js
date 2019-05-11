import React from "react";
import Home from "./components/Home";
import Resume from "./components/Resume";
import { Router } from "@reach/router";
import styled from "styled-components";
function App() {
  document.title = "Derek Alia";
  return (
    <AppWrapper>
      <Router>
        <Home path="/" />
        <Resume path="/resume" />
      </Router>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  font-family: "Roboto", sans-serif;
`;
