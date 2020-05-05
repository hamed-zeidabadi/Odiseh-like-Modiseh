const initState = {
  count: 0,
  items: 0,
  value: "",
};

export default (state = { ...initState }, action) => {
  switch (action.type) {
    case "ADD_To_CARD":
      return (
        console.log(action.payload, state),
        {
          ...state,
          count: action.payload + state.count,
          items: state.items + 1,
          value: state.value,
        }
      );

    case "DELETE_To_CARD":
      return {
        count: 0,
        items: 0,
        value: state.value,
      };

    case "SRCH":
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};
