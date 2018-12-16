export const getVacations = () => {
  return async dispatch => {
    const request = await fetch("http://localhost:3000/vacations");
    const data = await request.json();
    return dispatch({ type: "VACS-UPDATE", payload: { vacations: data } });
  };
}

export const updateVacations = (vacs) => {
  return {type:"VACS-UPDATE", payload:{vacations:vacs}};
}