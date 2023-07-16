import Userclass from "./UserClass";
import React from "react";

class About extends React.Component  {
  constructor(props){
      super(props);
      console.log("parent const")
  }
  componentDidMount(){
    console.log("component parent");
  }
  render(){
    console.log("render parnt")
    return (
    <div>
      <h1>This is about us</h1>
      <Userclass name="Pannaga" location="NRP"/>
    </div>
  );
  }
};
export default About;
