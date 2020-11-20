import { successHandler } from "../../util/responseHandlers";
import filterResult from '../../data/filters.json';

export default {
  list: (req, res) => {
    successHandler(res, filterResult);
  },
}