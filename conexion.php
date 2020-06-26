<?php

class Conexion
{

    public function conectarPDO()
    {

        $ruta='mysql:host=localhost;dbname=bdpaginaweb';
        $user='root';
        $pwd='';

        try 
        {
            $pdo = new PDO($ruta,$user,$pwd);
            return $pdo;
            
        } 
        catch (PDOException $e) 
        {
            print "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }


    }
}

?>