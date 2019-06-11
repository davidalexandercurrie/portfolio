import React from "react";
import { List, ListItem, ListItemText, Drawer } from "@material-ui/core";
import { stringQuartet, socketAV, About, Contact } from "../../store";

const styles = {
  TopList: { padding: 20, marginTop: 10 }
};

const NavBar = ({ setArtworkArray }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <div style={{ paddingTop: 70 }}>
        <List style={styles.TopList} component="nav">
          <ListItemText primary="Works" />
          <List component="nav">
            <ListItem
              button
              onClick={() => {
                setArtworkArray(stringQuartet);
              }}
            >
              <ListItemText primary="String Quartet" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setArtworkArray(socketAV);
              }}
            >
              <ListItemText primary="Socket AV" />
            </ListItem>
          </List>
        </List>
        <List component="nav">
          <ListItem
            button
            onClick={() => {
              setArtworkArray(Contact);
            }}
          >
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setArtworkArray(About);
            }}
          >
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default NavBar;
