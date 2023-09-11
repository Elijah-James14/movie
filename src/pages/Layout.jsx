import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Box height={"100vh"}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
