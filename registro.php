<?php
    require 'conexion.php';
    require 'metodos.php';

    $mensaje=null;
    if(isset($_POST['guardar']))
    {
        $datos=new Metodos();
       ;
        $datos->nombre=$_POST['nombre'];
        $datos->ap=$_POST['ap'];
        $datos->email=$_POST['email'];
        $datos->password=$_POST['password'];
       

       
        $datos->metNuevo();
        $mensaje=$datos->mensaje;

    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-------para el formulario de registro aseets3--->
  <link rel="stylesheet" href="assets3/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets3/css/Registration-Form-with-Photo.css">
    <link rel="stylesheet" href="regis.css">
    <!-- Estilos Css -->
 <link rel="stylesheet" href="css/styles.css">
<link href="https://fonts.googleapis.com/css?family=Red+Hat+Text:400,500,700&display=swap" rel="stylesheet">


    <title>Document</title>

</head>
<body>
<!-- Menu de Navegacion -->
<header id="header">
    <nav class="menu">
     <div class="logo-box">
       <h1><a href="#">Artist Web</a></h1>
       <span class="btn-menu"><i class="fas fa-bars"></i></span>
     </div>
     
     <div class="list-container">
        <ul class="lists">
            <li><a href="index.html" class="active">Inicio</a></li>
            <li><a href="#">Nuestra Comunidad</a></li>
            <li><a href="#">Game Service</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contactanos</a></li>
            <li><a href="Login/index.php">Login</a></li>
            <li><a href="registro.php">Registro</a></li>
        </ul>
     </div>
    </nav>
 
   
    <div class="skew-abajo"></div>

    </header>

<br><br>
	



<div class="register-photo">
        <div class="form-container">
            <form  action='registro.php' method="POST" >
                <h2 class="text-center"><strong>Formulario de registro</strong></h2>
            <div class="modi"> 
                <div class="form-group"><input  class="input" type="text"  id="nombre" name="nombre"  placeholder="nombre"  ></div>
                <div class="form-group"><input  class="input"type="ap" id="ap" name="ap"  placeholder="ingresar apellido"  ></div>   
                <div class="form-group"><input class="input" type="email" id="email" name="email"  placeholder="Ingresar email" ></div>
                <div class="form-group"><input  class="input" type="password" id="password" name="password"   placeholder="ingresar password" ></div>
                <div class="form-group"><button class="boton" type="submit" name="guardar" value="Guardar"  id = "boton">GUARDAR </button> </div>
                <!-----<div class="form-group"><input class="input" type="genero" class="input"  name="genero" id="validationCustom04"  placeholder="genero" required></div>----->
                <br>
             
            </div> 
            
              </form>
        </div>
    </div>

<script src="validar.js"></script>
    <script src="assets3/js/jquery.min.js"></script>
    <script src="assets3/bootstrap/js/bootstrap.min.js"></script>

<!-- Scripts -->
<script src="https://kit.fontawesome.com/35db202371.js"></script>
<script src="js/app.js"></script>

</body>
</html>