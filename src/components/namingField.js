import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    marginLeft: "15px",
    marginRight: "15px"
  },
  paper: {
    display: "flex",
    alignItems: "center",
    background: "rgb(245, 245, 245)",
    width: "100%",
    height: "40px",
    marginRight: "10px",
  },
  input: {
    width: "100%",
    marginLeft: "15px",
    marginRight: "15px"
  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    width: "120px",
    height: "40px"
  },
  typography: {
    marginLeft: "-8px"
  },
  icon: {
    marginRight: "-10px"
  }
});

const NamingField = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <InputBase
          className={classes.input}
          placeholder="シナリオにつける名前を入力してください"
          inputProps={{ "aria-label": "シナリオにつける名前を入力してください" }}
          //onChange={e => props.onChange(e)}
        />
      </Paper>
      <Button variant="contained" color="primary" className={classes.button}>
        <Typography className={classes.typography} >保存する</Typography>
        <SaveIcon className={classes.icon}/>
      </Button>
    </div>
  );
};

export default withStyles(styles)(NamingField);
