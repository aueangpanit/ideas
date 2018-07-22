export const LINK_TYPE = {
  link: "link",
  a: "a"
};

export const LOGIN_DROPDOWN = {
  name: "login-dropdown",
  contents: [
    { text: "Login With Google", link: "/auth/google", type: LINK_TYPE.a },
    { text: "Login With Facebook", link: "#", type: LINK_TYPE.a },
    { text: "Login With Email", link: "#", type: LINK_TYPE.a }
  ]
};

export const USER_DROPDOWN = {
  name: "user-dropdown",
  contents: [
    { text: "Profile", link: "/profile", type: LINK_TYPE.link },
    { text: "Settings", link: "#", type: LINK_TYPE.link },
    { text: "Logout", link: "/api/logout", type: LINK_TYPE.a }
  ]
};
