const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/mean", function (req, res) {
  const nums = req.query["nums"].split(",");
  const value = nums.reduce((a, b) => parseInt(a) + parseInt(b)) / nums.length;

  return res.json({
    response: {
      operation: "mean",
      value,
    },
  });
});

app.get("/median", function (req, res) {
  let nums = req.query["nums"]
    .split(",")
    .sort((a, b) => parseInt(a) + parseInt(b));
  const value = parseInt(nums[Math.round((nums.length - 1) / 2)]);

  return res.json({
    response: {
      operation: "median",
      value: value,
    },
  });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
