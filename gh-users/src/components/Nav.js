import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navvy = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  margin-bottom: 30px;
  font-size: 20px;
  margin-top: 20px;
`

const Link1 = styled(NavLink)`
    color: white;
    width: 100px;
    height: 50px;
    background: turquoise;
    text-decoration: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border: teal solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Link2 = styled(NavLink)`
    color: white;
    height: 50px;
    width: 100px;
    background: turquoise;
    text-decoration: none;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border: teal solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
`
class Nav extends React.Component {

  render() {
    return (
      <Navvy> 
        <Link1  activeStyle={{
    background: "teal"
  }} to="/followers">Followers</Link1>
        <Link2  activeStyle={{
        background: "teal"
  }} to="/following">Following</Link2>
      </Navvy>
    )
  }
}

export default Nav;