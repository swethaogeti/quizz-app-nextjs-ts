import React from "react";
import styled from "styled-components";
// import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutContainer = styled.div`
  max-width: 100vw;

  display: flex;
  flex-direction: column;

  height: 100vh;
  margin: 0;

  background-image: url("https://png.pngtree.com/background/20220731/original/pngtree-doodle-abstract-pink-background-picture-image_1897330.jpg");
  object-fit: cover;
`;

type MyPros = {
  children: [];
};
const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <LayoutContainer>
        <Navbar />
        {children}
      </LayoutContainer>
    </>
  );
};

export default Layout;
