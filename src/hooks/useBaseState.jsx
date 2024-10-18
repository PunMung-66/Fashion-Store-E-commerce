import React from "react";

const ACTION_TYPES = {
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const reducer = (state, { type, payload }) => {
  if (type === ACTION_TYPES.loading) {
    return { ...state, isLoading: true, erorr: null, data: null };
  }
  if (type === ACTION_TYPES.success) {
    return { ...state, isLoading: false, erorr: null, data: payload };
  }
  if (type === ACTION_TYPES.error) {
    return { ...state, isLoading: false, error: payload, data: null };
  }
  throw new Error("no such action");
};

function useBaseState() {
  const [{ isLoading, erorr, data }, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    error: null,
    data: null,
  });
  const setLoading = () => dispatch({ action: ACTION_TYPES.loading });
  const setSuccess = (value) =>
    dispatch({ action: ACTION_TYPES.success, payload: value });
  const setError = (err) =>
    dispatch({ action: ACTION_TYPES.error, payload: err });
  return { isLoading, erorr, data, setLoading, setSuccess, setError };
}

export default useBaseState;
