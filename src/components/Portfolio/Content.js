import React from "react";
import { Card, CardMedia } from "@material-ui/core";

const styles = {
  Paper: { padding: 10, margin: 10 }
};

const Content = ({ image }) => {
  return (
    <Card style={styles.Paper}>
      <CardMedia
        component={image.type}
        alt="string quartet score"
        src={image.url}
        title="Texture string quartet - David Currie"
      />
    </Card>
  );
};

export default Content;
