import { LINK_TYPE } from "../../data/linkType";

export const LOGIN_DROPDOWN = {
  name: "login-dropdown",
  contents: [
    {
      text: "Login With Google",
      value: "google",
      link: "/auth/google",
      type: LINK_TYPE.a
    }
  ]
};
