import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor!!");
  }
  componentDidMount(){
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <UserClass name="XyzClass" course="reactClass" />
      </>
    );
  }
}

export default About;
