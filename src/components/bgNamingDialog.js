import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

const styles = theme => ({
  root: {}
});

const BgNamingDialog = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        disableBackdropClick="false"
        disableEscapeKeyDown="false"
        fullWidth="true"
        maxWidth="true"
      >
        <DialogContent>
          <TextField
            error={Boolean(props.errorText !== "")}
            autoFocus
            margin="dense"
            id="name"
            label="画像の名前を入力してください"
            fullWidth
            onChange={e => props.onChange(e)}
          />
          <FormHelperText error>
            {props.errorText}
          </FormHelperText>
          <Typography className={classes.typography}>
            <Box>
              ・半角記号は使用できません。
            </Box>
            <Box>
              ・25文字以下でお願いします。
            </Box>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button disabled={props.judgNaming} onClick={() => props.onDecide()} color="primary">
            決定する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(BgNamingDialog);
