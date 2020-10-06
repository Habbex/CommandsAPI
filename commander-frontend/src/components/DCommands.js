import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/DCommandsAction";
import { useToasts } from "react-toast-notifications";
import {
  Container,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  withStyles,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DCommandsForm from "./DCommandsForm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { railscasts } from "react-syntax-highlighter/dist/esm/styles/hljs";


const styles = (theme) => ({
  root: {
    "& .MuiTableCell-head": {
      fontSize: "1.25rem",
    },
    "& .MuiTableCell": {
      whiteSpace: "pre",
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});


const columns = [
  { id: "HowTo", label: "How To", minWidth: 170, align: "center" },
  { id: "Line", label: "Line", minWidth: 170, align: "center" },
  { id: "Platform", label: "Platform", minWidth: 170, align: "center" },
];

const DCommands = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage -
    Math.min(
      rowsPerPage,
      props.DCommandsActionList.length - page * rowsPerPage
    );

  useEffect(() => {
    props.fetchAllDCommands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //componentDidMount

  const { addToast } = useToasts();
  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?"))
      props.deleteDCommands(id, () =>
        addToast("Deleted successfully", { appearance: "info" })
      );
  };

  return (
      <Paper className={classes.paper} elevation={3}>
        <Grid container>
          <Grid item md={6}>
            <DCommandsForm {...{ currentId, setCurrentId }} />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h1">Responsive h1</Typography>
            <Typography variant="h2">Responsive h2</Typography>
            <Typography variant="h3">Responsive h3</Typography>
            <Typography variant="h4">Responsive h4</Typography>
            <Typography variant="h5">Responsive h5</Typography>
            <Typography variant="subtitle1">Responsive Subtitle1</Typography>
            <Typography variant="subtitle2">Responsive Subtitle2</Typography>
            <Typography variant="caption">Descriptive</Typography>
            <Typography variant="body1">Body1 - Large</Typography>
            <Typography variant="body2">Body2 - Regular</Typography>
          </Grid>
        <Grid item md={12}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.DCommandsActionList.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((record, index) => {
                  return (
                    <TableRow
                      key={index}
                      hover
                      onClick={() => {
                        setCurrentId(record.id);
                      }}
                    >
                      <TableCell>{record.howTo}</TableCell>
                      <TableCell>
                        <SyntaxHighlighter
                          language={record.syntax}
                          style={railscasts}
                        >
                          {record.line}
                        </SyntaxHighlighter>
                      </TableCell>
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
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={props.DCommandsActionList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
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
  deleteDCommands: actions.deleteCommand,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(DCommands));
