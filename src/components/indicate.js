import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Icon from "./indicate__icon";
import Papers from "./indicate__paper";

const styles = theme => ({
  root: {
    display: "flex"
  },
  iconField: {},
  paper: {
    width: "100vw",
    marginRight: "62px"
  }
});

const Indicate = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.iconField}>
        {props.elements.map(element => {
          if (element.judg) {
            return (
              <Icon judg={element.judg} />
            );
          } else {
            return false
          }
        })}
        <Icon
          judg="add"
          onClick={e => {
            props.addClick(e);
          }}
        />
      </div>
      <div className={classes.paper}>
        {props.elements.map(element => {
          if (element.text) {
            return (
              <Papers judg={element.judg} text={element.text} imageData={element.imageData} onPreview={previewData => props.onPreview(previewData)}/>
            );
          } else {
            return false
          }
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(Indicate);
