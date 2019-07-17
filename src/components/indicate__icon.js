import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import ActionAndVoiceIcon from "@material-ui/icons/RecordVoiceOver";

const styles = theme => ({
  root: {
    position: "relative",
    left: "40px"
  },
  paper: {
    background: "#555555",
    height: "48px",
    width: "10px"
  },
  fab: {
    left: "-15px",
    top: "10px"
  }
});

const selectIcon = (props, classes) => {
  if (props.judg === "add") {
    return (
      <Fab
        size="small"
        color="secondary"
        className={classes.fab}
        onClick={e => {
          props.onClick(e);
        }}
      >
        <AddIcon />
      </Fab>
    );
  } else if (props.judg === "backImage") {
    return (
      <Fab
        size="small"
        color="primary"
        className={classes.fab}
        onClick={e => {
          props.onClick(e);
        }}
      >
        <WallpaperIcon />
      </Fab>
    );
  } else if (props.judg === "actionAndVoice") {
    return (
      <Fab
        size="small"
        color="primary"
        className={classes.fab}
        onClick={e => {
          props.onClick(e);
        }}
      >
        <ActionAndVoiceIcon />
      </Fab>
    );
  } else {
    return;
  }
};

const Icon = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square="true">
        {selectIcon(props, classes)}
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Icon);
