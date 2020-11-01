import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACTS,
} from "../constant/types";

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

//UPDATE_A_CONTACT
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

//DELETE_CONTACT
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

//SELECT ALL CONTACT
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

// CLEAR SELECTED CONTACT
export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});

// DELETE SELECTED CONTACT
export const deleteSelectedContact = () => ({
  type: DELETE_SELECTED_CONTACTS,
});
