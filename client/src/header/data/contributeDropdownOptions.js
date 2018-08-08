import utils from "../../utils";

const { LINK_TYPE } = utils.data;

export default {
  name: "contribute-dropdown",
  contents: [
    {
      text: "Add Genre",
      link: "/genre/new",
      type: LINK_TYPE.link
    }
  ]
};
