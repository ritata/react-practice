import React from 'react';
import './styles.css';
import * as util from './util/util.js';

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

const onClickLink = (e) => {
  e.preventDefault();
  window.location.href = e.target.href;
  window.location.reload();
};

// TODO: after learn state, use state instead
function Repos(props) {
  const tabs = window.location.hash || '#FavoriteRepos';
  return (
    <div className="Repos">
      <ul className="Tabs">
        <li>
          <a
            href="#FavoriteRepos"
            onClick={onClickLink}
            className={tabs === '#FavoriteRepos' ? 'active' : ''}
          >
            Repositories
          </a>
        </li>
        <li>
          <a
            href="#MyProjects"
            onClick={onClickLink}
            className={tabs === '#MyProjects' ? 'active' : ''}
          >
            My Projects
          </a>
        </li>
      </ul>
      <p />
      {tabs === '#FavoriteRepos' && (
        <div id="FavoriteRepos">
          <RepoList data={props.favorites} />
        </div>
      )}
      {tabs === '#MyProjects' && (
        <div id="MyProjects">
          <RepoList data={props.projects} />
        </div>
      )}
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
