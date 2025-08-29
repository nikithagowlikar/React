import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return <h1 className="font-bold">{loggedInUser}</h1>;
          }}
        </UserContext.Consumer>

        <UserClass name="XyzClass" course="reactClass" />
      </>
    );
  }
}

export default About;
