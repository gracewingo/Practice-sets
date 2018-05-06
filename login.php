<?php
$user = 'root';
$password = 'root';
$db = 'inventory';
$host = 'localhost';
$port = 3306;

$link = mysql_connect(
   "$host:$port", 
   $user, 
   $password
);
$db_selected = mysql_select_db(
   $db, 
   $link
);
$password="secret";
$username="007";
$user=isset($_GET['username']) ? $_GET['username'] : $_POST['username'];
$pass=isset($_GET['password']) ? $_GET['password'] : $_POST['password'];
if ($user==$username && $pass==$password) {
  echo 'pass';
} else {
  echo 'fail';
}
?>