import {showMessage, hideMessage} from "react-native-flash-message";
import { Colors } from "../constant/Styles";

const Function = {
  randomColor: () => Math.floor(Math.random() * 16777215).toString(16),
  showToast: (type, content) => {
    showMessage({
      message: "Thông báo",
      description: content,
      type: type,
      backgroundColor: type==='success'?Colors.colorYellow:type==="error"?Colors.colorRed:'gray'
    });
  },
};
export default Function;
