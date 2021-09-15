import React from "react";
import Menue from "./Menue";
import { useRouteMatch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layout(props) {
  const match = useRouteMatch();
  return (
    <>
      <Header />
      <Menue />
      <div className='content'>{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
