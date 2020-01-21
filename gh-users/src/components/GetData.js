import React from "react";
import axios from "axios";
import { Card, Container } from "semantic-ui-react";
import styled from "styled-components";

const MyCard = styled.div `
    color: turquoise;
    font-size: 1.8rem;
    height: 150px;
    display: flex;
    width: 40%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    background: gray;
    &:hover {
        background: teal;
    }
`

const Line = styled.p `
    margin: 0;
`

class GetData extends React.Component {
    state = {
        user: "",
    }

componentDidMount() {
    axios
    .get(`https://api.github.com/users/JaxAtwood`)
    .then(res => {
        console.log(res.data)
        this.setState({
            user: res.data ,
        })
    })
    .catch(error => {
        console.log("error:", error)
    })
}

    render() {
        return (
            <Container>
                <Card.Group centered >
                    <Card>
                    <MyCard>
                    <Line>{this.state.user.login}</Line>
                    <Line>I have {this.state.user.public_repos} active projects</Line>
                    <Line>I have {this.state.user.followers} Followers</Line>
                    <Line>I am following {this.state.user.following} users</Line>
                    </MyCard>
                    </Card>
                </Card.Group>
            </Container>
        )
    }
}

export default GetData;