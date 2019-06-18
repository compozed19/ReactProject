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
