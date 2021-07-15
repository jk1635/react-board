import React from "react";
import styled from "styled-components";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import PostWrite from "./pages/PostWrite";

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/postwrite" exact component={PostWrite} />
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 900px;
  height: auto;
  margin: auto;
  box-sizing: border-box;
  display: block;
  background-color: #fff;
  border: 1px solid #ddd;
`;

export default App;
