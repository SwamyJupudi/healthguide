<?php
$servername = "localhost";
$username = "root";        
$password = "";            
$dbname = "mydatabase";

$conn=mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
    die("connection Failed");
}
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$weight = $_POST['weight'];
$height = $_POST['height'];
$sql="INSERT INTO health values($name,$age,$gender,$weight,$height)";
$result=mysqli_query($conn,$sql);
if(!$result){
    die("Not inserted".mysqli_error());
}
else{
    echo "data stored";
}
mysqli_close($conn);
?>