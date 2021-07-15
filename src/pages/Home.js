import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// import Button from "react-bootstrap/Button";

const Home = (props) => {
  const post_list = useSelector((state) => state.post.post_list);

  return (
    <React.Fragment>
      <BigBox>
        <Title>게시판 만들기</Title>
        <SubTitle>아주 간단한 게시판을 만들어봅니다.</SubTitle>
        <Button
          onClick={() => {
            props.history.push("/postwrite");
          }}
        >
          글쓰기
        </Button>
      </BigBox>
      <ListBox>
        <TableTitle1>글번호</TableTitle1>
        <TableTitle2>글쓴이</TableTitle2>
        <TableTitle3>글제목</TableTitle3>
      </ListBox>

      {post_list.map((e) => {
        return (
          <PostBox key={e.id}>
            <TableTitle1>{e.title}</TableTitle1>
            <TableTitle2>{e.writer}</TableTitle2>
            <TableTitle3>{e.contents}</TableTitle3>
          </PostBox>
        );
      })}
    </React.Fragment>
  );
};

const TableTitle1 = styled.div`
  width: 200px;
  font-size: 16px;
  padding: 12px;
  vertical-align: bottom;
  display: table-cell;
  box-sizing: border-box;
  text-align: inherit;
  border-collapse: collapse;
  text-indent: initial;
  border-spacing: 1px;
`;

const TableTitle2 = styled.div`
  width: 400px;
  font-size: 16px;
  padding: 12px;
  vertical-align: bottom;
  display: table-cell;
  box-sizing: border-box;
  text-align: inherit;
  border-collapse: collapse;
  text-indent: initial;
  border-spacing: 1px;
`;

const TableTitle3 = styled.div`
  width: 400px;
  font-size: 16px;
  padding: 12px;
  vertical-align: bottom;
  display: table-cell;
  box-sizing: border-box;
  text-align: inherit;
  border-collapse: collapse;
  text-indent: initial;
  border-spacing: 1px;
`;

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 200;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  font-family: inherit;
  box-sizing: border-box;
  display: block;
  margin: 0px 0px 8px 0px;
  text-align: left;
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0px 0px 16px 0px;
  margin-top: 0;
  margin-bottom: 1rem;
  box-sizing: border-box;
  display: block;
  color: #212529;
  text-align: left;
`;

const BigBox = styled.div`
  padding: 2rem 1rem;
  padding: 64px 0px;
  padding-right: 0;
  padding-left: 12px;
  border-radius: 0;
  margin: 0px 0px 32px 0px;
  background-color: #e9ecef;
  box-sizing: border-box;
  display: block;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  box-sizing: border-box;
`;

const Button = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
`;

const ListBox = styled.div`
  padding: 0px;
  margin: auto;
  width: 900px;
  font-weight: bold;
  display: table-cell;
  box-sizing: border-box;
  text-align: inherit;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  cursor: pointer;
  border-collapse: collapse;
  text-indent: initial;
  border-spacing: 2px;
`;

const PostBox = styled.div``;

export default Home;
