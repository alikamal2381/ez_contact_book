//ACTION -> INCREMENT / DECREMENT
export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const hungry = () => {
  return {
    type: "HUNGRY",
  };
};
