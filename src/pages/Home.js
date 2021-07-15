import React from "react";
import styled from "styled-components";

const Home = (props) => {
  return (
    <React.Fragment>
      <h1>게시판 만들기</h1>
      <div>아주 간단한 게시판을 만들어봅니다</div>
      <Button
        onClick={() => {
          props.history.push("/postwrite");
        }}
      >
        글쓰기
      </Button>
    </React.Fragment>
  );
};

const Button = styled.button`
  background-color: #19ce60;
  color: white;
`;

export default Home;
