import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const data = {
  personalInfo: {
    firstName: "AAA",
    lastName: "BBB",
    age: 30,
    profileUrl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    email: "CCC@DDD.com"
  },
  favoriteRepos: [
    "uber/baseweb",
    "jquense/react-bit-calendar",
    "vim-airline/vie-airline"
  ]
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App userInfo={data} />
  </React.StrictMode>,
  rootElement
);
