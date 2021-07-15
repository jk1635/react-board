import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const PostWrite = (props) => {
  return (
    <React.Fragment>
      <p>제목을 입력하세요</p>
      <input type="text" />

      <p>글쓴이를 입력하세요</p>
      <input type="text" />

      <p>내용을 입력하세요</p>
      <textarea type="text" />

      <Button
        onClick={() => {
          props.history.push("/");
        }}
      >
        뒤로가기
      </Button>
    </React.Fragment>
  );
};

const Button = styled.button`
  background-color: #ccd0d4;
  color: white;
`;

export default PostWrite;
