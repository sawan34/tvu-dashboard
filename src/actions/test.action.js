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
const getData = (dataToPost) => {
  let url = "";
  let body = { };
  let header = {};
  url = urlConstants.BASEURL;

  return APIService.post(url, header, dataToPost).then(
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
