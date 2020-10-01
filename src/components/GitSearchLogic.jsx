import React, { Component } from "react";
import { fetchProductData } from "../modules/users";

class GitSearchLogic extends Component {
  state = {
    users: [],
  };

  componentDidMount = async () => {
    const users = await fetchUserData();
    this.setState({ users: users });
  };

  render() {
    let usersList;
    if (this.state.users !== []) {
      usersList = this.state.users.map((users) => {
        return (
          <div data-cy={"user-" + users.id} key={users.id}>
            <h3 data-cy="first">{users.first}</h3>
            <p data-cy="last">{users.last}</p>
          </div>
        );
      });
    }

    return (
      <div>
        <h1 data-cy="header">Users</h1>
        {usersList}
      </div>
    );
  }
}

export default GitSearchLogic;
