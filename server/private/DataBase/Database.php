<?php

function OpenCon()
 {
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  define("DB_SERVER", "localhost");
  define("DB_USER", "root");
  define("DB_PASSWORD", "Elhay1357");
  define("DB_DATABASE", "customers");


 $conn = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE) or die("Connect failed: %s\n". $conn -> error);

 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
   
?>