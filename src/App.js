import React from "react";
import "./styles.css";
import * as util from "./util/util.js";

function Avatar(props) {
  return <img className="Avatar" src={props.pic} alt="avatar" />;
}

function Profile(props) {
  return (
    <div className="Profile">
      <Avatar pic={props.data.profileUrl} />
      <div className="UserInfo">
        <div className="UserName">{props.data.userName}</div>
        <p />
        <ul>
          <li>
            Name: {props.data.firstName} {props.data.lastName}
          </li>
          <li>Email: {props.data.email}</li>
          <li>Age: {props.data.age}</li>
        </ul>
      </div>
    </div>
  );
}

function RepoList(props) {
  const items = props.data;
  const listProjects = items.map((projects, index) => (
    <li key={index}>
      {projects.name}
      <br />
      <div className="Description">
        {projects.description}
        <br />
        Update on {util.convertToDate(projects.updateTimestamp)}
      </div>
      <hr />
    </li>
  ));
  return <ul>{listProjects}</ul>;
}

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabs: window.location.hash || "#FavoriteRepos" };
    this.onClickLink = this.onClickLink.bind(this);
  }

  onClickLink = (e) => {
    e.preventDefault();
    window.location.hash = e.target.hash;
    this.setState({ tabs: window.location.hash });
  };

  render() {
    return (
      <div className="Repos">
        <ul className="Tabs">
          <li>
            <a
              href="#FavoriteRepos"
              onClick={this.onClickLink}
              className={this.state.tabs === "#FavoriteRepos" ? "active" : ""}
            >
              Repositories
            </a>
          </li>
          <li>
            <a
              href="#MyProjects"
              onClick={this.onClickLink}
              className={this.state.tabs === "#MyProjects" ? "active" : ""}
            >
              My Projects
            </a>
          </li>
        </ul>
        <p />
        {this.state.tabs === "#FavoriteRepos" && (
          <div id="FavoriteRepos">
            <RepoList data={this.props.favorites} />
          </div>
        )}
        {this.state.tabs === "#MyProjects" && (
          <div id="MyProjects">
            <RepoList data={this.props.projects} />
          </div>
        )}
      </div>
    );
  }
}

export default function App(props) {
  return (
    <div className="App">
      <Profile data={props.userInfo.personalInfo} />
      <Repos
        favorites={props.userInfo.favoriteRepos}
        projects={props.userInfo.projects}
      />
    </div>
  );
}
