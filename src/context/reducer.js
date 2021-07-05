/* eslint-disable import/no-anonymous-default-export */
//TODO: create contact using all actions - DONE:

import {
  SET_CONTACT,
  SET_LOADING,
  CONTACT_TO_UPDATE,
  SET_SINGLE_CONTACT,
} from "./action.types";

//TODO: use switch case - DONE:
export default (state, action) => {
  // this action has a action type along with some payload
  switch (action.type) {
    case SET_CONTACT:
      return action.payload == null
        ? { ...state, contacts: [] }
        : { ...state, contacts: action.payload };

    case SET_LOADING:
      return { ...state, isLoading: action.payload };

    case CONTACT_TO_UPDATE:
      return {
        ...state,
        contactToUpdate: action.payload,
        contactToUpdateKey: action.key,
      };

    case SET_SINGLE_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };

    default:
      return state;
  }
};
