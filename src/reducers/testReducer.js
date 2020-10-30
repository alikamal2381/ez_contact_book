const testReducer = (state = "", action) => {
  switch (action.type) {
    case "HUNGRY":
      return "I am hungry, Lets eat Pizza!";
    default:
      return "";
  }
};

export default testReducer;
