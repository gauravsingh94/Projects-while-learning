const express = require("express")
const router = express.Router();
const {authenticateJwt} = require("../middlewares/authenticate");
const User = require("../models/user");
const Course = require("../models/course");

router.post("/signup", async (req, res) => {
    // logic to sign up user
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      res.status(409).json({ error: "User already exist." });
    } else {
      const obj = { username, password };
      const newUser = new User(obj);
      newUser.save();
      token = generateJwt(obj);
      res.json({ message: "User created successfully.", token: token });
    }
  });
  
  router.post("/login", async (req, res) => {
    // logic to log in user
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });
    if (user) {
      const token = generateJwt(user);
      res.json({ message: "Successfuly login as a user", token: token });
    } else {
      res.json({ err: "username or password does not match." });
    }
  });
  
  router.get("/courses", authenticateJwt, async (req, res) => {
    // logic to list all courses
    const courses = await Course.find({ published: true });
    res.json({ courses });
  });
  
  router.post("/courses/:courseId", authenticateJwt, async (req, res) => {
    // logic to purchase a course
  
    const course = await Course.findById(req.params.courseId);
    console.log(course);
    if (course) {
      console.log(req.user.username);
      const user = await User.findOne({ username: req.user.username });
      if (user) {
        await user.save();
        res.json({ message: "Course purchased successfully." });
      } else {
        res.json({ error: "user not found." });
      }
    } else {
      res.json({ message: "course not found." });
    }
  });
  
  router.get("/purchasedCourses", authenticateJwt, async (req, res) => {
    // logic to view purchased courses
    console.log(req.user.username);
    const user = await User.findOne({ username: req.user.username }).populate(
      "puchasedCourses"
    );
    if (user) {
      res.json({ purchasedCourse: user.puchasedCourses || [] });
    } else {
      res.json({ err: "user not found." });
    }
  });

  module.exports = router;