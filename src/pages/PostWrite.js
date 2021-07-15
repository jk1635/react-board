import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { createPost } from "../redux/modules/post";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const title_ref = React.useRef(null);
  const writer_ref = React.useRef(null);
  const contents_ref = React.useRef(null);

  const addPost = () => {
    const post = {
      id: "index",
      title: title_ref.current.value,
      writer: writer_ref.current.value,
      contents: contents_ref.current.value,
    };
    dispatch(createPost(post));
    props.history.replace("/");
  };

  return (
    <React.Fragment>
      <input placeholder="제목을 입력하세요" ref={title_ref} />
      <br />
      <input placeholder="글쓴이를 입력하세요" ref={writer_ref} />
      <br />
      <textarea placeholder="내용을 입력하세요" ref={contents_ref} rows="5" />
      <Button onClick={addPost}>글쓰기</Button>
    </React.Fragment>
  );
};

const Button = styled.button`
  background-color: #ccd0d4;
  color: white;
`;

export default PostWrite;
