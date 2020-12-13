import React from "react";
import "./styles.css";

function Avatar(props) {
  return <img className="Avatar" src={props.pic} alt="avatar" />;
}

function Profile(props) {
  return (
    <div className="Profile">
      <Avatar pic={props.data.profileUrl} />
      <div className="UserInfo">
        {props.data.firstName} {props.data.lastName}
        <div>Email: {props.data.email}</div>
        <div>Age: {props.data.age}</div>
      </div>
    </div>
  );
}

function FavoriteRepos(props) {
  const items = props.data;
  const listFavorites = items.map((favorites) => <li>{favorites}</li>);
  return <ul>{listFavorites}</ul>;
}

function Repos(props) {
  return (
    <div className="Repos">
      <FavoriteRepos data={props.data} />
    </div>
  );
}

export default function App(props) {
  return (
    <div className="App">
      <Profile data={props.userInfo.personalInfo} />
      <Repos data={props.userInfo.favoriteRepos} />
    </div>
  );
}
