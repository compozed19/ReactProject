export const onIncrementClick = (current) => {
  return dispatch => {
    const payload = {
      type: "INCREMENT",
      count: current+1
    };
    console.log("i am in action", payload)
    dispatch(payload);
  }
}

export const onFocusName =(current) => {
  return dispatch => {
    const payload = {
      type : 'NAME',
      name : current
    };
    console.log("updated action is--",payload)
    dispatch(payload);
  }
}
