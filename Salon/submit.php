<?php
    
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "salon";
  
  $conn = mysqli_connect($servername, $username, $password, $dbname);
  
  // Проверяем соединение
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  
  // Выбор данных из таблицы

	$sql = "INSERT INTO reception_logs SET 
          name = '".$_POST['name']."',
		      surname = '".$_POST['surname']."',
		      phone = '".$_POST['phone']."',
		      data = '".$_POST['data']."',
		      time = '".$_POST['time']."',
		      specialist  = '".$_POST['specialist']."',
		      service = '".$_POST['service']."'";

  mysqli_query($conn, $sql);

  $newURL = "./index.php";
  header('Location: '.$newURL);

?>