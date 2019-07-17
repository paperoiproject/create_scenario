import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
  appBar: {},
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  simulate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "600px",
    height: "400px",
    background: "rgb(200, 200, 200)"
  },
  textField: {
    width: "600px",
    marginTop: "20px",
    marginBottom: "20px"
  },
  toggleContainer: {
    //margin: theme.spacing(2, 0)
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap",
    width: "450px"
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "150px"
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddAvDialog = props => {
  const { classes } = props;
  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.onClose}
      scroll="paper"
      disableBackdropClick="false"
      disableEscapeKeyDown="false"
      TransitionComponent={Transition}
    >
      <div className="">
        <AppBar position="fixed" color="default" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.onClose}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              動作&発話エレメントを構成する
            </Typography>
            <Button
              onClick={() => {
                props.handleClose();
              }}
            >
              <Typography variant="h6">保存する</Typography>
              <SaveIcon />
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
      <DialogContent dividers="true">
        <div className={classes.root}>
          <div className={classes.simulate}>
            いつかここにシミュレータ画面を置きたい
          </div>
          <TextField
            className={classes.textField}
            label="PaPeRoに喋らせたいことを入力してください"
            placeholder="例：こんにちは"
            //margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            onChange={e => props.onChange(e)}
          />
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup
              className={classes.buttonGroup}
              size="large"
              value={props.alignment}
              exclusive
              onChange={(e, newAlignment) => props.handleAlignment(e, newAlignment)}
            >
              <ToggleButton value="topLeft" className={classes.button}>
                笑う
              </ToggleButton>
              <ToggleButton value="topCenter" className={classes.button}>
                顔を赤らめる
              </ToggleButton>
              <ToggleButton value="topRight" className={classes.button}>
                あやまる
              </ToggleButton>
              <ToggleButton value="midwayLeft" className={classes.button}>
                首を縦に振る
              </ToggleButton>
              <ToggleButton value="midwayCenter" className={classes.button}>
                首を横に振る
              </ToggleButton>
              <ToggleButton value="midwayrRight" className={classes.button}>
                首を傾ける
              </ToggleButton>
              <ToggleButton value="bottomLeft" className={classes.button}>
                左を向く
              </ToggleButton>
              <ToggleButton value="bottomCenter" className={classes.button}>
                右を向く
              </ToggleButton>
              <ToggleButton value="bottomRight" className={classes.button}>
                何もしない
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(AddAvDialog);
