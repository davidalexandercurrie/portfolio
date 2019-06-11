import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = {
  appbar: {
    alignItems: "center",
    background: "white",
    fontFamily: ["Inconsolata"],
    position: "relative",
    width: "100%"
  }
};

function Header() {
  return (
    <AppBar style={styles.appbar}>
      <Toolbar>
        <Typography variant="h4">David Alexander Currie</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
