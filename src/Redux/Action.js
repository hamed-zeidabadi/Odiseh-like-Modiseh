export const ADD = (price) => {
  return {
    type: "ADD_To_CARD",
    payload: price,
  };
};
export const DELETE = () => {
  return {
    type: "DELETE_To_CARD",
  };
};

export const SEARCH = (input) => {
  return {
    type: "SRCH",
    payload: input,
  };
};
