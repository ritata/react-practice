import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const data = {
  personalInfo: {
    userName: "ritata",
    firstName: "Rita",
    lastName: "",
    age: 18,
    profileUrl: "https://avatars2.githubusercontent.com/u/14904327?s=460&v=4",
    email: "ritata@amazon.com"
  },
  favoriteRepos: [
    {
      name: "uber/baseweb",
      description:
        "A React Component library implementing the Base design language",
      updateTimestamp: 1607731200000
    },
    {
      name: "jquense/react-bit-calendar",
      description: "gcal/outlook like calendar component",
      updateTimestamp: 1607731200000
    },
    {
      name: "vim-airline/vim-airline",
      description: "lean & mean status/tabline for vim that's light as air",
      updateTimestamp: 1607558400000
    }
  ],
  projects: [
    {
      name: "react-practice",
      description: "Created with CodeSandbox",
      updateTimestamp: 1607472000000
    },
    {
      name: "react-try",
      description: "Created with CodeSandbox",
      updateTimestamp: 1607860168511
    },
    {
      name: "tata",
      description: "try try kan",
      updateTimestamp: 1443571200000
    }
  ]
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App userInfo={data} />
  </React.StrictMode>,
  rootElement
);
