import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "8px",
    position: "relative",
    left: "60px"
  },
  trianglePaper: {
    transform: "rotate(45deg)",
    background: "rgb(200, 200, 200)",
    width: "30px",
    height: "29px",
    position: "relative",
    top: "7px",
    left: "4px"
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background:
      "linear-gradient(to right, rgb(200, 200, 200) 95px, rgb(245, 245, 245) 0px)",
    width: "100%",
    height: "40px",
    position: "relative",
    top: "2px",
    left: "-12px",
    paddingRight: "5px"
  },
  typography1: {
    marginLeft: "10px"
  },
  typography2: {
    position: "absolute",
    left: "95px",
    marginLeft: "10px"
  },
  button: {},
  margin: {
    marginLeft: "5px"
  }
});

const selectPaper = (props, classes) => {
  if (props.judg === "backImage") {
    return (
      <Paper className={classes.paper}>
        <Typography className={classes.typography1}>背景</Typography>
        <Typography className={classes.typography2}>{props.text}</Typography>
        <div>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.Button}
            onClick={() => {
              props.onPreview(props.imageData);
            }}
          >
            プレビュー
          </Button>
          <IconButton className={classes.margin}>
            <ClearIcon fontSize="small" />
          </IconButton>
        </div>
      </Paper>
    );
  } else if (props.judg === "actionAndVoice") {
    return (
      <Paper className={classes.paper}>
        <Typography className={classes.typography1}>動作&発話</Typography>
        <Typography className={classes.typography2}>{props.text}</Typography>
      </Paper>
    );
  } else {
    return;
  }
};

const Papers = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.trianglePaper} />
      {selectPaper(props, classes)}
    </div>
  );
};

export default withStyles(styles)(Papers);
