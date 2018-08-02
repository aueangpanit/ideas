import { LINK_TYPE } from "../utils/linkType";

export const USER_DROPDOWN = {
  name: "user-dropdown",
  contents: [
    { text: "Profile", link: "/profile", type: LINK_TYPE.link },
    { text: "Settings", link: "#", type: LINK_TYPE.link },
    { text: "Logout", link: "/api/logout", type: LINK_TYPE.a }
  ]
};
