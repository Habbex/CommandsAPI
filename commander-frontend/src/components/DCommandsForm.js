import React, { useEffect } from "react";
import { Grid, TextField, withStyles, Button, FormControl,Select, InputLabel } from "@material-ui/core";
import { connect } from "react-redux";
import useForm from "./useForm";
import * as actions from "../actions/DCommandsAction";
import { useToasts } from "react-toast-notifications";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "65ch",
    },
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  smMargin: {
    margin: theme.spacing(1),
  },
});

const initialFieldValues = {
  howTo: "",
  line: "",
  platform: "",
  syntax: ""
};

const DCommandsFrom = ({ classes, ...props }) => {
  //toast msg
  const { addToast } = useToasts();

  //validate()
  //validate({howTo:'Stuff'})
  const validate = (fieldValues = values) => {
    let tempInput = { ...errors };

    if ("howTo" in fieldValues)
      tempInput.howTo = fieldValues.howTo ? "" : "This field is required.";

    if ("line" in fieldValues)
      tempInput.line = fieldValues.line ? "" : "This field is required.";

    if ("platform" in fieldValues)
      tempInput.platform = fieldValues.platform
        ? ""
        : "This field is required.";

    setErrors({
      ...tempInput,
    });
    if (fieldValues === values) {
      return Object.values(tempInput).every((x) => x === "");
    }
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFieldValues, validate, props.setCurrentId);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const onSuccessCreate = () => {
        resetForm();
        addToast("Created successfully", { appearance: "success" });
      };
      const onSuccessUpdate = () => {
        resetForm();
        addToast("Updated successfully", { appearance: "success" });
      };

      if (props.currentId === 0) props.createDCommands(values, onSuccessCreate);
      else props.updateDCommands(props.currentId, values, onSuccessUpdate);
    }
  };

  useEffect(() => {
    if (props.currentId !== 0)
      setValues({
        ...props.DCommandsActionList.find((x) => x.id === props.currentId),
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form
      autoComplete="off"
      noValidate
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            name="howTo"
            variant="outlined"
            label="How To"
            value={values.howTo}
            onChange={handleInputChange}
            {...(errors.howTo && { error: true, helperText: errors.howTo })}
          />
          
          <TextField
            id="outlined-multiline-static"
            name="line"
            variant="outlined"
            multiline
            rows={10}
            label="Line"
            value={values.line}
            onChange={handleInputChange}
            {...(errors.line && { error: true, helperText: errors.line })}
          />

          <TextField
            name="platform"
            variant="outlined"
            label="Platform"
            value={values.platform}
            onChange={handleInputChange}
            {...(errors.platform && {
              error: true,
              helperText: errors.platform,
            })}
          />
           <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Syntax Highlight</InputLabel>
        <Select
          native
          value={values.syntax}
          onChange={handleInputChange}
          label="Syntax Highlight"
          inputProps={{
            name: 'syntax',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="None" />
          <option value="powershell">Powershell</option>
          <option value="bash">Bash</option>
          <option value="pgsql">Postgres-SQL</option>
          <option value="sql">T-SQL</option>
          <option value="javascript">Javascript</option>
          <option value="csharp">C# / DotNet</option>
          <option value="css">CSS</option>
          <option value="dockerfile">docker file</option>  
        </Select>
      </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.smMargin}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              className={classes.smMargin}
              onClick={resetForm}
            >
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = (state) => ({
  DCommandsActionList: state.DCommandsReducer.list,
});

const mapActionToProps = {
  createDCommands: actions.createCommand,
  updateDCommands: actions.updateCommand,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(DCommandsFrom));
