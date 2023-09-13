import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
