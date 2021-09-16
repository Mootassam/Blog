import React from "react";
import Menue from "./Menue";
import { useRouteMatch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layout(props) {
  const match = useRouteMatch();
  return (
    <>
      <div className='main-wrapper main-wrapper-1'>
        <div className='navbar-bg'> </div>
        <Header />
        <Menue />
        <div className='main-content'>{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
