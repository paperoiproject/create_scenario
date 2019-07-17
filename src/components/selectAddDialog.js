import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {},
  input: {
    display: "none"
  }
});

const SelectAddDialog = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        scroll="paper"
        disableBackdropClick="false"
        disableEscapeKeyDown="false"
      >
        <DialogTitle id="dialog-title">エレメントの追加</DialogTitle>
        <DialogContent dividers="true">
          <List>
            <input
              accept="image/jpeg,image/png"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={e => {
                props.onFileChange(e);
              }}
            />
            <label htmlFor="contained-button-file">
              <ListItem>
                <ListItemText primary="背景エレメントの追加" />
              </ListItem>
            </label>
            <Divider />
            <ListItem button onClick={e => props.onAddAv()}>
              <ListItemText primary="動作&発話エレメントの追加" />
            </ListItem>
          </List>
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

export default withStyles(styles)(SelectAddDialog);
