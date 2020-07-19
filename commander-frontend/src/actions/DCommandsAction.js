import api from "../Api/apiInitialization";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAllCommands = () => (dispatch) => {
  api
    .DCommands()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const createCommand = (data, onSuccess) => (dispatch) => {
  api
    .DCommands()
    .create(data)
    .then(response => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: response.data,
      })
      onSuccess();
    })
    .catch((err) => console.log(err))
}

export const updateCommand = (id, data, onSuccess) => (dispatch) => {
    api
      .DCommands()
      .update(id, data)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.UPDATE,
          payload: {id, ...data},
        });
        onSuccess();
      })
      .catch((err) => console.log(err));
  };
  
  export const deleteCommand = (id, onSuccess) => (dispatch) => {
    api
      .DCommands()
      .delete(id)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.DELETE,
          payload: id
        });
        onSuccess();
      })
      .catch((err) => console.log(err));
  };