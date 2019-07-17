import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {},
  img: {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

const PreviewDialog = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        disableBackdropClick="false"
        disableEscapeKeyDown="false"
      >
        <DialogTitle id="dialog-title">プレビュー</DialogTitle>
        <DialogContent dividers="true">
          <img
            className={classes.img}
            src={props.previewData}
            alt="背景の画像"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.onClose()} color="primary">
            戻る
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(PreviewDialog);
