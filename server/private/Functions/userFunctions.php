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
  if ( !preg_match("/^[a-zA-Z][0-9a-zA-Z_]{2,23}[0-9a-zA-Z]$/", $_POST["username"]) ) {
    http_response_code(400);
    die("Error: Username must contain only letters");
  } else {
    $username = $_POST['username'];
  }
  if ( !preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $_POST["email"]) ) {
    http_response_code(400);
    die("Error: Email must be a valid email address");
  } else {
    $email = $_POST['email'];
  }
  if ( !preg_match("/^[0-9]{10}$/", $_POST["phone"]) ) {
    http_response_code(400);
    die("Error: Phone must be a valid phone number");
  } else {
    $phone = $_POST['phone'];
  }
  if ( !preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/", $_POST["password"]) ) {
    http_response_code(400);
    die("Error: Password must be at least 8 characters long");
  } else {
    $password = $_POST['password'];
  }
  if ( !preg_match('%^(?:(?:https?|ftp)://)(?:\S+(?::\S*)?@|\d{1,3}(?:\.\d{1,3}){3}|(?:(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)(?:\.(?:[a-z\d\x{00a1}-\x{ffff}]+-?)*[a-z\d\x{00a1}-\x{ffff}]+)*(?:\.[a-z\x{00a1}-\x{ffff}]{2,6}))(?::\d+)?(?:[^\s]*)?$%iu' , $_POST["URL"]) ) {
    http_response_code(400);
    die("Error: URL must be a valid URL address");
  } else {
    $URL = $_POST['URL'];
  }

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