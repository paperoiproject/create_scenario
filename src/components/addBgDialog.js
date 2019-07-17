import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";

import "cropperjs/dist/cropper.css";
import Cropper from "react-cropper";

const styles = theme => ({
  appBar: {},
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  previewField: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    float: "right",
    position: "relative",
    top: "-20px"
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const selectCropper = (props, cropperRef, width, height) => {
  if (props.imageWidth !== null) {
    if (props.imageWidth >= props.imageHeight) {
      return (
        <Cropper
          aspectRatio={16 / 9}
          preview=".img-preview"
          guides={false}
          zoomable={false}
          movable={false}
          toggleDragModeOnDblclick={false}
          viewMode={2}
          autoCropArea={0.7}
          src={props.imageData}
          style={{
            position: "relative",
            top: "-25px",
            maxWidth: width,
            height: Math.floor(
              (props.imageHeight *
                Math.floor((props.imageWidth * height) / props.imageHeight)) /
                props.imageWidth
            ),
            width: Math.floor((props.imageWidth * height) / props.imageHeight)
          }}
          ref={cropperRef}
        />
      );
    } else {
      return (
        <Cropper
          aspectRatio={16 / 9}
          preview=".img-preview"
          guides={false}
          zoomable={false}
          movable={false}
          toggleDragModeOnDblclick={false}
          viewMode={2}
          autoCropArea={0.7}
          src={props.imageData}
          style={{
            position: "relative",
            top: "-25px",
            width: width,
            //maxHeight: "885px",
            height: Math.floor((props.imageHeight * width) / props.imageWidth)
          }}
          ref={cropperRef}
        />
      );
    }
  }
};

const AddBgDialog = props => {
  const width = window.innerWidth * 95 / 100
  const height = width * 9 / 16
  const { classes } = props;
  let cropperRef = React.createRef();
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
              画像を切り取る
            </Typography>
            <Button
              onClick={() => {
                props.handleClose(cropperRef);
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
          <div  className={classes.previewField}>
            <h3>プレビュー</h3>
            <div
              className="img-preview"
              style={{
                overflow: "hidden",
                width: width,
                height: height,
                float: "left",
                position: "relative",
                top: "-15px"
              }}
            />
          </div>
          {selectCropper(props, cropperRef, width, height)}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(AddBgDialog);
