<?php
// connect to db

$host = "108.179.232.142";
$user = "anthangs_alexd";
$password = "YiosD&0k5$@74l0dTht";
$database = "anthangs_numerology";
$conn = mysqli_connect($host, $user, $password, $database);
$results = $conn->query("SELECT * FROM num_meaning");
?>

<?php while ($data = $results->fetch_assoc()): ?>

    <tr>
        <td><?php echo $data['id'] ?></td>
        <td><?php echo $data['summary'] ?></td>
        <td><?php echo $data['numerology'] ?></td>
    </tr>
<?php endwhile; ?>