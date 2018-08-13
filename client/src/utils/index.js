// Data
import { LINK_TYPE } from "./data/linkType";
import { LOGIN_DROPDOWN } from "./auth/data/loginDropdownOptions";
import { USER_DROPDOWN } from "./profile/data/profileDropdownOptions";

// Components
// Components - Form
import DropdownForm from "./form/components/DropdownForm";
import PictureForm from "./form/components/PictureForm";
import { TextForm, TextFormNoBackButton } from "./form/components/TextForm";
import TextFieldDatePickerForm from "./form/components/TextFieldDatePickerForm";
import TextAreaForm from "./form/components/TextAreaForm";
// Components - Form - Snippets
import FileField from "./form/components/snippets/FileField";
import {
  ButtonAsBackButton,
  LinkAsBackButton
} from "./form/components/snippets/BackButton";
import SubmitButton from "./form/components/snippets/SubmitButton";
import TextField from "./form/components/snippets/TextField";
import TextArea from "./form/components/snippets/TextArea";
import DatePicker from "./form/components/snippets/DatePicker";
import Modal from "./form/components/snippets/Modal";
// Components - List
import List from "./list/components/List";

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
      snippets: {
        FileField,
        ButtonAsBackButton,
        LinkAsBackButton,
        SubmitButton,
        TextField,
        TextArea,
        DatePicker,
        Modal
      },
      DropdownForm,
      PictureForm,
      TextForm,
      TextFormNoBackButton,
      TextFieldDatePickerForm,
      TextAreaForm
    }
  },
  list: {
    components: {
      List
    }
  }
};
