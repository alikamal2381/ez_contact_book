import { CREATE_CONTACT, GET_CONTACT } from "../constant/types";

//CREATE_CONTACT
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

//GET_A_CONTACT
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

//UPDATE_CONTACT
export const addContact = (contact) => {
  return {
    type: "UPDATE_CONTACT",
    payload: contact,
  };
};

//DELETE_CONTACT
export const addContact = (contact) => {
  return {
    type: "DELETE_CONTACT",
    payload: contact,
  };
};
