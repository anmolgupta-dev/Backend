import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// Data Files
import filterData from './data/filters.json';
import jobsData from './data/jobs.json';

const app = express();
const port = 3008;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/jobTypes", (req, res) => {
  const jobTypes = filterData.job_type;
  res.status(200).json(jobTypes);
});

app.get("/workSchedules", (req, res) => {
  const workSchedules = filterData.work_schedule;
  res.status(200).json(workSchedules);
});

app.get("/experiences", (req, res) => {
  const experiences = filterData.experience;
  res.status(200).json(experiences);
});

app.get("/departments", (req, res) => {
  let departments = filterData.department;
  departments = departments.slice(0, 10);
  res.status(200).json(departments);
});

app.get("/departments/all", (req, res) => {
  const departments = filterData.department;
  res.status(200).json(departments);
});

app.get("/jobs", (req, res) => {
  const jobs = [];
  jobsData.forEach(job => {
    const { total_jobs_in_hospital, name } = job;
    jobs.push({ total_jobs_in_hospital, name });    
  });
  res.status(200).json(jobs);
});

app.get("/job/items", (req, res) => {
  let params = req.query;
  let jobName = params.jobName;
  let jobItems = [];
  jobsData.forEach(job => {
    const { name } = job;
    if(name === jobName) {
      job.items.forEach(items => {
        const { job_title, job_type, salary_range, city, job_id} = items;
        jobItems.push({ job_title, job_type, salary_range, city, job_id });
        return false;
      })
      return false;
    }
  });
  res.status(200).json(jobItems);
});

app.get("/job/description", (req, res) => {
  let params = req.query;
  let jobName = params.jobName;
  let jobItem = {};
  jobsData.forEach(job => {
    const { name } = job;
    if(name === jobName) {
      job.items.forEach(items => {
        if(items.job_id == params.jobId)
        jobItem = items;
        return false;
      })
      return false;
    }
  });
  res.status(200).json(jobItem);
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
