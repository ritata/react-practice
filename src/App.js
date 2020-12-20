import React from "react";
import "./styles.css";
import ConvertToDate from "./Util.js";

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

function Repositories(props) {
  const items = props.data;
  const listProjects = items.map((projects, index) => (
    <li key={index}>
      {projects.name}
      <br />
      <div className="Description">
        {projects.description}
        <br />
        Update on <ConvertToDate time={projects.updateTimestamp} />
      </div>
      <hr />
    </li>
  ));
  return <ul>{listProjects}</ul>;
}

function Repos(props) {
  return (
    <div className="Repos">
      <ul className="Tabs">
        <li>
          <a href="#FavoriteRepos" className="active">
            Repositories
          </a>
        </li>
        <li>
          <a href="#MyProjects">My Projects</a>
        </li>
      </ul>
      <p />
      <div id="FavoriteRepos" className="show active">
        <Repositories data={props.favorites} />
      </div>
      <div id="MyProjects" className="fade">
        <Repositories data={props.projects} />
      </div>
    </div>
  );
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
