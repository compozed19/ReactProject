export const changeName = (current) =>{
  return dispatch => {
    const payload ={
      type : 'ENTER_NAME',
      userName : current.userName
    }
    dispatch(payload);
 }
}
