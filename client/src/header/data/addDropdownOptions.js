import utils from "../../utils";

const { LINK_TYPE } = utils.data;

export default {
  name: "add-dropdown",
  contents: [
    {
      text: "Genre",
      link: "/genre/new",
      type: LINK_TYPE.link
    },
    {
      text: "Movie",
      link: "/movie/new",
      type: LINK_TYPE.link
    }
  ]
};
