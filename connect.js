// anychart.onDocumentReady(function () {
//     anychart.data.loadJsonFile("php/connect.php", function (data) {
//       // create a chart and set loaded data
//       chart = anychart.bar(data);
//       chart.container("container");
//       chart.draw();
//     });
//   });


function showExpression(num, need) {

  // if ((num == "")||(need == "")) {
  //   document.getElementById("txtHint").innerHTML = "error";
  //   return;
  // }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById(need).innerHTML = this.responseText;
  }
  xhttp.open("GET", "php/test.php?q="+num+"&r="+need);
  xhttp.send();
}
