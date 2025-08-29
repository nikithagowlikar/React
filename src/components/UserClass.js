import React from "react";
class UserClass extends React.Component {
  constructor(props) {
   
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
   
  }
  render() {
   
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
