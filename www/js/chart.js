var xValues = ["Carbohydrates", "Proteins", "Fats"];
var yValues = [60, 25, 15];
var barColors = [
  "rgb(121,145,139)",
  "rgb(139,185,168)",
  "rgb(191,205,196)"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  }
});