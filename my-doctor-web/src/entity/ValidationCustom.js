import { errorMessages } from "../Config";

function Validation(error) {
  try {
    if (error.hasOwnProperty("code") && error.code === "ERR_NETWORK") {
      alert(errorMessages["ERR_NETWORK"]);
    } else if (
      error.hasOwnProperty("response") &&
      error.response.hasOwnProperty("status")
    ) {
      alert(errorMessages[error.response.status]);
    } else if (error.status !== undefined) {
      alert(errorMessages[error.status]);
    } else {
      alert(errorMessages[500]);
    }
  } catch (error) {
    alert(errorMessages[500]);
  }
}

export default Validation;
