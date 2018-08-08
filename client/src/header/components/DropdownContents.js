import React from "react";

import DropdownContent from "./DropdownContent";
import CONTRIBUTE_DROPDOWN from "../data/contributeDropdownOptions";
import utils from "../../utils";

const { LOGIN_DROPDOWN } = utils.auth.data;
const { USER_DROPDOWN } = utils.profile.data;

export default ({ auth, id }) => {
  if (auth) {
    return (
      <React.Fragment>
        <DropdownContent id={id} content={USER_DROPDOWN} />
        <DropdownContent id={id} content={CONTRIBUTE_DROPDOWN} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <DropdownContent id={id} content={LOGIN_DROPDOWN} />
    </React.Fragment>
  );
};
