const express = require("express");
const usersRouter = require("./routes/users");
const contentRouter = require("./routes/content");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.redirect("localhost:3000");
});

app.use("/users", usersRouter);

app.use("/content", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
