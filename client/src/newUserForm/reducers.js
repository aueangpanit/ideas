import { IS_USERNAME_AVAILABLE } from "./actionTypes";

export default function(
  state = {
    checkUsernameLoading: false,
    usernameAvailable: true
  },
  action
) {
  switch (action.type) {
    case IS_USERNAME_AVAILABLE:
      return action.payload || false;
    default:
      return state;
  }
}
