import React from "react";
import { Tabs, Tab } from "@material-ui/core";

const Footer = () => {
  return (
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      centered
      position="fixed"
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  );
};

export default Footer;
