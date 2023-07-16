import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo :{
        login:"dummy",
        location:"dummy",
        avatar_url:"dummy",
      }
    };
    
  }
 async componentDidMount() {
    const data=await fetch("https://api.github.com/users/matter0");
    const json=await data.json();

    this.setState({
        userInfo:json,
    });
  }

  render() {
    const {login,location,avatar_url} =this.state.userInfo;
    console.log(name);
    console.log(location);
    return (
      <div>
        <img src={avatar_url}/>
        <h1>{login}</h1>
        <h1>{location}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Add count
        </button>
      </div>
    );
  }
}
export default Userclass;
