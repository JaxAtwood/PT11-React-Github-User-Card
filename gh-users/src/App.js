import React from 'react';
import { Route } from "react-router-dom";
import GetData from "./components/GetData";
import Nav from "./components/Nav";
import GetFollowingData from './components/GetFollowing';
import GetFollowerData from './components/GetFollower';
import styled from "styled-components";

const Header = styled.div `
  border: black solid 1px;
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Title = styled.h1 `
  // border: black solid 1px;
  margin-left: 20px;
`


class App extends React.Component {


  render() {
    return (
      <> 
        <Header>
          <Title>My GitHub User Card</Title>
        <Nav />
        </Header>
        <GetData />
        <Route path="/followers" component={GetFollowerData}></Route>
        <Route path="/following" component={GetFollowingData}></Route>
      </>
    )
  }
}

export default App;