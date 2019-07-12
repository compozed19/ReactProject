export const changeName = (current) =>{
  console.log("current state----",current);
  return dispatch => {
    const payload ={
      type : 'ENTER_NAME',
      userName : current
    }
    console.log("payload----",payload);
    dispatch(payload);
 }
}
