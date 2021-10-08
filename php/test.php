<?php
$mysqli = new mysqli("108.179.232.142", "anthangs_alexd", "YiosD&0k5$@74l0dTht", "anthangs_numerology");
if($mysqli->connect_error) {
  exit('Could not connect');
}

// Read $_GET value
if(isset($_GET['q'])){
    $q = $_GET['q'];
    $r = $_GET['r'];
}


$sql = "SELECT id, summary, numerology, life, strengths, weaknesses, personality
FROM num_meaning WHERE id = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $sum, $num, $life, $stre, $weak, $per);
$stmt->fetch();
$stmt->close();

// echo "<table>";
// echo "<tr>";
// echo "<th>ID</th>";
// echo "<td>" . $id . "</td>";
// echo "<th>Summary</th>";
// echo "<td>" . $sum . "</td>";
// echo "<th>ContactName</th>";
// echo "<td>" . $num . "</td>";
// echo "<th>Address</th>";
// echo "<td>" . $life . "</td>";
// echo "<th>City</th>";
// echo "<td>" . $stre . "</td>";
// echo "<th>PostalCode</th>";
// echo "<td>" . $weak . "</td>";
// echo "<th>Country</th>";
// echo "<td>" . $per . "</td>";
// echo "</tr>";
// echo "</table>";

if ($r == "expression") {
    echo "<h1>Expression Number: $id</h1><br>";
    echo $num;
    echo "<br>";
    echo "<br>";
}
else if ($r == "soul") {
    echo "<h1>Soul Number: $id</h1><br>";
    echo $num;
    echo "<br>";
    echo "<br>";
}
else if ($r == "personality") {
    echo "<h1>Personality Number: $id</h1><br>";
    echo $num;
    echo "<br>";
    echo "<br>";
    echo "<h3>Personality</h3>";
    echo $per;
    echo "<br>";
    echo "<br>";
}
else if ($r == "master"){
    echo "<h1>Your Master Number is $id</h1><br>";
    echo "<h3>Summary</h3>";
    echo $sum;
    echo "<h3>Your Life Path</h3>";
    echo $life;
    echo "<h3>Strengths</h3>";
    echo $stre;
    echo "<h3>Weaknesses</h3>";
    echo $weak;
}
else {

echo "<h1>mysql data</h1>";
echo "<table class=\"table\">";
echo "<tr>";
echo "<th>ID</th>";
echo "<th>summary</th>";
echo "<th>numerology</th>";
echo "<th>life</th>";
echo "<th>strengths</th>";
echo "<th>weaknesses</th>";
echo "<th>personality</th>";
echo "</tr>";
echo "<tbody>";
echo "<tr>";
echo "<td>" . $id . "</td>";
echo "<td>" . $sum . "</td>";
echo "<td>" . $num . "</td>";
echo "<td>" . $life . "</td>";
echo "<td>" . $stre . "</td>";
echo "<td>" . $weak . "</td>";
echo "<td>" . $per . "</td>";
echo "</tr>";
echo "</tbody>";
echo "</table>";
}
?>