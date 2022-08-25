<?php
function getAllUsers() {
  global $conn;
  $sql = "SELECT * FROM `users` WHERE 1";
  $result = $conn->query($sql);
  $customers = array();
  if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
          $customers[] = $row;
      }
  }
  if (!$result){
    http_response_code(404);
    die("Error: " . $conn->error);
  }
  return $customers;
}

function addUser() {
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $phone = $_POST['phone'];
  $URL = $_POST['URL'];
  global $conn;
  $sql = "INSERT INTO `users` (`username`, `email`, `password`, `phone number`, `URL`) VALUES ('$username', '$email', '$password', '$phone', '$URL')";
  $result = $conn->query($sql);
  if (!$result){
    http_response_code(404);
    die("Error: " . $conn->error);
  }
  return $result;
}

function deleteUser() {
  $username = $_POST['username'];
  global $conn;
  $sql = "DELETE FROM `users` WHERE `username` = '$username'";
  $result = mysqli_query($conn, $sql);
  if (!$result){
    http_response_code(404);
    die("Error: " . $conn->error);
  }
  return $result;
}
?>