import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import indexPage from "./api/indexPage/index";
import filter from './api/filters/filterRoutes';
import job from './api/jobs/jobRoutes';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", indexPage);
app.use("/filter", filter);
app.use("/jobs", job);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
