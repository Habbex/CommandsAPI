import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/DCommandsAction";
import { useToasts } from "react-toast-notifications";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DCommandsForm from "./DCommandsForm";

const styles = (theme) => ({
  root: {
    "& .MuiTableCell-head": {
      fontSize: "1.25rem",
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});

const DCommands = ({ classes, ...props }) => {

const [currentId, setCurrentId]= useState(0);

  useEffect(() => {
    props.fetchAllDCommands();
  }, []); //componentDidMount

  const {addToast}= useToasts();
  const onDelete = id => {
    if(window.confirm("Are you sure you want to delete this record?"))
    props.deleteDCommands(id,()=> addToast("Deleted successfully", {appearance: 'info'}));
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
        <Grid item xs={6}>
          <DCommandsForm {...({currentId, setCurrentId})}/>
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>How To</TableCell>
                  <TableCell>Line</TableCell>
                  <TableCell>Platform</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.DCommandsActionList.map((record, index) => {
                  return (
                    <TableRow key={index} hover onClick={()=>{setCurrentId(record.id)}}>
                      <TableCell>{record.howTo}</TableCell>
                      <TableCell>{record.line}</TableCell>
                      <TableCell>{record.platform}</TableCell>
                      <TableCell>
                        <ButtonGroup variant="text">
                          <Button>
                            <EditIcon
                              color="primary"
                              onClick={() => {
                                setCurrentId(record.id);
                              }}
                            />
                          </Button>
                          <Button>
                            <DeleteIcon
                              color="secondary"
                              onClick={() => onDelete(record.id)}
                            />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  DCommandsActionList: state.DCommandsReducer.list,
});

const mapActionToProps = {
  fetchAllDCommands: actions.fetchAllCommands,
  deleteDCommands: actions.deleteCommand
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(DCommands));
