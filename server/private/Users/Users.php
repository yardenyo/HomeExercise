<?php
//include DB connection file
include '../DataBase/Database.php';
include '../Functions/userFunctions.php';
//open DB connection
$conn = OpenCon();

$method = $_SERVER['REQUEST_METHOD'];

if(!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

switch($method) {
    case 'GET':
        $result = getAllUsers();
        echo json_encode($result);
        break;
    case 'POST':
        $result = addUser();
        echo json_encode($result);
        break;
    case 'DELETE':
      $result = deleteUser();
      echo json_encode($result);
        break;
    default:
        header('HTTP/1.0 405 Method Not Allowed');
        break;
}

//close DB connection
CloseCon($conn);

?>