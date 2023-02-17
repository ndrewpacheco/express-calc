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
  const nums = req.query["nums"]
    .split(",")
    .sort((a, b) => parseInt(a) + parseInt(b));
  const value = parseInt(nums[Math.round((nums.length - 1) / 2)]);

  return res.json({
    response: {
      operation: "median",
      value,
    },
  });
});

app.get("/mode", function (req, res) {
  const nums = req.query["nums"].split(",");
  const counterObj = {};
  nums.forEach((num) => {
    counterObj[num] ? (counterObj[num] += 1) : (counterObj[num] = 1);
  });

  const max = Math.max(...Object.values(counterObj));
  const value = Object.keys(counterObj).find((key) => counterObj[key] === max);

  return res.json({
    response: {
      operation: "mode",
      value,
    },
  });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
