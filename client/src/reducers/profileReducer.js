import { IS_USERNAME_AVAILABLE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case IS_USERNAME_AVAILABLE:
      console.log(action.payload || false);
      return action.payload || false;
    default:
      return state;
  }
}
