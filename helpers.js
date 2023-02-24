function findMean(arr) {
  return arr.reduce((a, b) => parseInt(a) + parseInt(b)) / arr.length;

}


function findMedian(arr) {
  const nums = arr.sort((a, b) => parseInt(a) + parseInt(b));
  return parseInt(nums[Math.round((nums.length - 1) / 2)]);
}


// app.get("/median", function (req, res) {
//   const nums = req.query["nums"]
//     .split(",")
//     .sort((a, b) => parseInt(a) + parseInt(b));
//   const value = parseInt(nums[Math.round((nums.length - 1) / 2)]);

//   return res.json({
//     response: {
//       operation: "median",
//       value,
//     },
//   });
// });

function findMode(arr) {

}

module.exports = {
  findMean,
  findMedian,
  findMode
}