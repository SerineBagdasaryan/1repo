<!DOCTYPE html>
<html>
<head>
<title>tnajin</title>
<style>
table, th, td {
    border: 1px solid black;
}
</style>
</head>
<body>
<div id="container" style="background-color:lightblue" width="400" height="300">
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
Username:<input type="text" name="username"><br/>
First Name:<input type="text" name="firstname"><br/>
Last Name:<input type="text" name="lastname"><br/>
Email:<input type="email" name="email"><br/>
Password:<input type="password"><br/>  
Confirm password: <input type="password"><br/>             
Subscription:<textarea name="message" rows="10" cols="30"></textarea><br/>
Bday:<input type="date" name="bday"><br/>
Submit:<input type="submit" name="Send">
<input type="button" value="X" style="color:red">
<input type="button" value="S" style="color:green">
</form>
</div>
</body>
</html>
<?php

if (isset($_POST["username"]) && $_POST["username"]
|| isset($_POST["Firstname"]) && $_POST["Firstname"]
|| isset($_POST["lastname"]) && $_POST["lastname"]
|| isset($_POST["email"]) && $_POST["email"]
|| isset($_POST["password"]) && $_POST["password"]
|| isset($_POST["confirm"]) && $_POST["confirm"]
|| isset($_POST["subscription"]) && $_POST["subscription"]
|| isset($_POST["bday"]) && $_POST["bday"]

){
function filterfirstName ($firstname, $filter = "|^[a-zA-Z]+$|is"){
return preg_match($filter . $firstname) ? false : true;
if ( !filterfirstName ($name) ){
print "valid name";
}	
if (wordCharacters($_POST["firstname"])) {
echo "Firstname is: " . $_POST["firstname"];
} else {
echo "Firstname contains non letter characters";
}
}
echo "<br>";
function filterlastName ($lasttname, $filter = "|^[a-zA-Z]+$|is"){
return preg_match($filter . $lastname) ? false : true;
if ( !filterlastName ($name) ){
print "valid name";
}
if (wordCharacters($_POST["lastname"])) {
echo "lastname is: " . $_POST["lastname"];
} else {
echo "Lastname contains non letter characters";
}
echo "<br>";
}
 var_dump((int)$_POST["bday"]===false);
if ((int)$_POST["bday"]) {
if(validatebday((int)$_POST["bday"])){
echo "Age is: " . $_POST["bday"];
}else{
echo "Age should not be less then 16 and more ";
}
} else {
echo "Please input a valid value";
}
echo "<br>";
$date=$_POST['bday'];
if(strpos($date,'-')){
$dateArr=explode('-',$date);
if(checkdate($dateArr[1],$dateArr[2],$dateArr[0])){
echo $date;
}else{
echo "error";
}
}


function wordCharacters($data)
{
$patt = '|^[a-zA-Z]+$|is';
if (preg_match($patt, trim($data), $matches)) {
return true;
} else {
return false;
}
}

function validatebday($bday)
{
if ($bday >= 16) {
return true;
} else {
return false;
}
}
if (strlen(Email) >= 1 and strlen(Email) <= 55) {
if (ereg('^[a-zA-Z0-9\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$', Email)) {

	if (eregi("^[a-zA-Z0-9_]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$]", Email)) 
{
 return FALSE;
}
}
}
if (filter_var($email_a, FILTER_VALIDATE_EMAIL)) {
    echo "Email address '$email_a' is considered valid.\n";
}
if (filter_var($email_b, FILTER_VALIDATE_EMAIL)) {
    echo "Email address '$email_b' is considered valid.\n";
} else {
    echo "Email address '$email_b' is considered invalid.\n";
}
}
function pas($password,$confpassword){
 if (isset($password)&&$confpassword1 && strlen($password)>5){
 if (isset($password)&&$confpassword){
 if (strcmp($password,$confpassword) ==0){
 return 1;
 }else{
 echo "password !== confpassword";
 }
 }else{
	 echo "confpassword";
 die;
 }
 }else {
 echo "grel chisht password";
 }
 }

 $servername = "localhost";
$username = "root";
$password = "";
$dbname = "us";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
 

  $sql = "CREATE DATABASE us";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}
      $sql = "CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(40) NOT NULL           
    bday Date
    )";

 
if ($conn->query($sql) === TRUE) {
    echo "Table users created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}
if ($result->num_rows > 0) {
    echo "<table><tr><th>ID</th><th>Name</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["firstname"]. " " . $row["lastname"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$sql = "SELECT id, firstname, lastname FROM us";
$result = $conn->query($sql);

$stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email) VALUES (abraham,danielyan,abr@mail.ru)");
$stmt->bind_param("s,s,s", $firstname, $lastname, $email);
$stmt->execute();

echo "New records created successfully";

$stmt->close();
 $conn->close();
?>
