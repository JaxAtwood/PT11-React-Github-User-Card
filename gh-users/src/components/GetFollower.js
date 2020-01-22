import React from "react";
import axios from "axios";
import styled from "styled-components";

const Bar = styled.input `
    height: 40px;
    font-size: 20px;
    margin-top: 20px;
`
const Box = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`
const User = styled.div `
    display: flex;
    justify-content: center;
    font-size: 20px;
    line-height: 1px;
`

function searchingFor(term) {
    return function(x){
        return x.login.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class GetFollowerData extends React.Component {
    constructor(props) {
      super(props)
       this.state = {
         followers: [],
         term: ""
        }
        this.searchHandler = this.searchHandler.bind(this);
    }
      
    searchHandler = event => {
        this.setState({
            term: event.target.value
        })
    }
   
    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        axios
        .get(`https://api.github.com/users/JaxAtwood/followers?per_page=100`)
        .then(res => {
            console.log(res.data)
            this.setState({
                followers: res.data,
            })
        })
        .catch(error => {
            console.log("error:", error)
        })
    }


render() {
    const {term, followers} = this.state;
    return (
    <Box>
        <form>
            <Bar 
                type="text"
                placeholder="search..."
                onChange={this.searchHandler}
                value={term}
                />
        </form>
    <div>
        <h1>Current # of Followers: {followers.length}</h1>
         {followers.filter(searchingFor(term)).map((item, index) => {
            return (
                <div key={index}>
                    <User>
                        <p>{item.login}</p>
                    </User>
                </div>
                );
               })}
    </div>
    </Box>

            )
        }
    }

export default GetFollowerData;