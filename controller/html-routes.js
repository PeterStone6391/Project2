var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
<<<<<<< HEAD
=======
  // index route loads view.html
>>>>>>> 3d29bed494949411eb6d64f2ec9a6779974c4b93
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/reviews", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/review.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
