import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const defaultPosition = toast.POSITION.TOP_RIGHT;

export const showToast = (
  type = "success",
  msg,
  autoClose = 2000,
  className = "primaryColor",
  position = defaultPosition
) => {
  if (type === "success") {
    toast.success(msg, {
      autoClose: autoClose === null ? 2000 : autoClose,
      className: className === null ? "primaryColor" : className,
      position: position,
    });
  } else if (type === "error") {
    toast.error(msg, {
      autoClose: autoClose === null ? 2000 : autoClose,
      className: className === null ? "dangerColor" : className,
      position: position,
    });
  }
};

export default showToast;
