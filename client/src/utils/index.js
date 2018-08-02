// Data
import { LINK_TYPE } from "./data/linkType";
import { LOGIN_DROPDOWN } from "./auth/data/loginDropdownOptions";
import { USER_DROPDOWN } from "./profile/data/profileDropdownOptions";

// Components
import FileField from "./form/components/FileField";
import {
  BackButton_Button,
  BackButton_Link
} from "./form/components/BackButton";
import SubmitButton from "./form/components/SubmitButton";
import TextField from "./form/components/TextField";

// Actions
import * as authActions from "./auth/actions";

// Reducers
import authReducer from "./auth/reducer";

export default {
  data: { LINK_TYPE },
  auth: {
    data: { LOGIN_DROPDOWN },
    actions: authActions,
    reducer: authReducer
  },
  profile: {
    data: { USER_DROPDOWN }
  },
  form: {
    components: {
      FileField,
      BackButton_Button,
      BackButton_Link,
      SubmitButton,
      TextField
    }
  }
};
