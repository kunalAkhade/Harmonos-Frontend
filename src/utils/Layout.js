import React from "react";
import Header from "../component/Header";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default Layout;
