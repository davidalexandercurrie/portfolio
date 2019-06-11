import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import NavBar from "./NavBar";
import Content from "./Content";
import Iframe from "react-iframe";
import { stringQuartet } from "../../store";

const style = {
  Paper: {
    background: "white"
  },
  Body: {
    marginTop: 40
  },
  textContent: {
    alignItems: "center"
  }
};

const Portfolio = ({ artwork }) => {
  const [artworkArray, setArtworkArray] = useState(stringQuartet);
  return (
    <Grid style={style.Body} container>
      <Grid item xs={2} container>
        <NavBar setArtworkArray={setArtworkArray} />
      </Grid>
      <Grid item xs={10}>
        <Grid container>
          {artworkArray.map(
            image =>
              image.type === "img" && (
                <Grid item xs={4}>
                  <Content image={image} />
                </Grid>
              )
          )}
          {artworkArray.map(
            image =>
              image.type === "iframe" && (
                <Iframe
                  url={image.url}
                  width={image.width}
                  height={image.height}
                  allow="camera; microphone"
                />
              )
          )}
          {artworkArray.map(
            image =>
              image.type === "text" && (
                <>
                  <Grid item xs={1} />
                  <Grid item xs={4}>
                    <Typography component="h3">{image.textContent}</Typography>
                  </Grid>
                </>
              )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
