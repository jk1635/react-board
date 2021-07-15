import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import Home from "./pages/Home";
import PostWrite from "./pages/PostWrite";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/postwrite" exact component={PostWrite} />
        {/* <button
          onClick={() => {
            this.props.history.push("/postwrite");
          }}
        >
          글쓰기
        </button> */}
        {/* <button
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          뒤로가기
        </button> */}
      </div>
    );
  }
}
export default withRouter(App);
