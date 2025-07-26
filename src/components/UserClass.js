import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    console.log("child  constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("child componentDidMount!");
  }
  render() {
    console.log("child render");
    return (
      <>
        <div className="user-card">
          <h1>count1-{this.state.count}</h1>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increament
          </button>
          <div>{this.props.name}</div>
          <div>{this.props.course}</div>
        </div>
      </>
    );
  }
}
export default UserClass;
