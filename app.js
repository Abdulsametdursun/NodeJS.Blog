const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://SamDursun:test1234@samdursun.sjqlkw0.mongodb.net/note-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// listen for requests
// app.listen(3000);

// Middleware & Static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Morgan middleware
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
// Create a blog post
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "Blog Post 2",
//     snippet: "This is a new blog post",
//     body: "This is the body of the new blog post",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Read a blog post
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Read a single blog post
// app.get("/single-blog", (req, res) => {
//   Blog.findById("66671a9835c99e40d5fa11bb")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Example of middlewares
// app.use((req, res, next) => {
//   console.log("new request made");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("in the second middleware");
//   next();
// });

// Routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //res.send("<p>About Page</p>");
  res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 page
// 404 should be last
app.use((req, res) => {
  res.status(404).render("404", { title: "Home" });
});
