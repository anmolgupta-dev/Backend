import { successHandler } from "../../util/responseHandlers";
import jobResult from '../../data/jobs.json';

export default {
  list: (req, res) => {
    successHandler(res, jobResult);
  },
}