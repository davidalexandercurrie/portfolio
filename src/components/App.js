import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Portfolio from "./Portfolio/Portfolio";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Inconsolata", "Monospace"],
    useNextVariants: true
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Portfolio />
      {/* <Footer /> */}
    </MuiThemeProvider>
  );
};

export default App;
