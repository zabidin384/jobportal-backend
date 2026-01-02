const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { createJob, getJobs, getJobsEmployer, getJobsById, updateJob, deleteJob, toggleCloseJob } = require("../controllers/jobController");

const router = express.Router();

router.route("/").post(protect, createJob).get(getJobs);
router.route("/get-jobs-employer").get(protect, getJobsEmployer);
router.route("/:id").get(getJobsById).put(protect, updateJob).delete(protect, deleteJob);
router.put("/:id/toggle-close", protect, toggleCloseJob);

module.exports = router;
