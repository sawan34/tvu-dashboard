/**
 * Summary: Summary of the test action
 * Description: Create test for testing
 * @author Pawan Gupta
 */

//Import
import { APIService } from "../service/api";
import { urlConstants } from "../constants/uri.constants";

//Public Method
/**
 * Description: handle getdata
 * @return {Promise}
 */
const getData = () => {
  let url = "";
  let body = { };
  let header = {};
  url = urlConstants.BASEURL;

  return APIService.get(url, header, body).then(
    data => {
        let getResponse = data;
        if (getResponse) {
          console.log("return getResponse");
          return getResponse;
        } else {
          return null;
        }
    },
    error => {
      return {error: error};
    }
  );
};

//Export testActions
export const testActions = {
  getData
};
