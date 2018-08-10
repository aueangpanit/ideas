// Data
import { LINK_TYPE } from "./data/linkType";
import { LOGIN_DROPDOWN } from "./auth/data/loginDropdownOptions";
import { USER_DROPDOWN } from "./profile/data/profileDropdownOptions";

// Components
import FileField from "./form/components/FileField";
import {
  ButtonAsBackButton,
  LinkAsBackButton
} from "./form/components/BackButton";
import SubmitButton from "./form/components/SubmitButton";
import TextField from "./form/components/TextField";
import TextArea from "./form/components/TextArea";
import DatePicker from "./form/components/DatePicker";

// Action Types
import { FETCH_USER } from "./auth/actionTypes";

// Actions
import * as authActions from "./auth/actions";

// Reducers
import authReducers from "./auth/reducers";

export default {
  data: { LINK_TYPE },
  auth: {
    data: { LOGIN_DROPDOWN },
    actions: authActions,
    actionTypes: { FETCH_USER },
    reducers: authReducers
  },
  profile: {
    data: { USER_DROPDOWN }
  },
  form: {
    components: {
      FileField,
      ButtonAsBackButton,
      LinkAsBackButton,
      SubmitButton,
      TextField,
      TextArea,
      DatePicker
    }
  }
};
