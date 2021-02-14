import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Box, Button } from "@material-ui/core";

export default function NavBar({ setEditCheck, nullState }) {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
            Books library
          </Typography>
          <Box mr={9}></Box>
          <Button
            onClick={() => {
              setEditCheck(true);
              nullState();
            }}
            variant="contained"
            color="secondary"
          >
            Add
            <AddCircleIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
