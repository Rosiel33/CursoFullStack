<?php

require_once "../autoload/autoload-psr4.php";

$obj->titulo = "Geladeira";
$obj->preco = 900.00;
$obj->defineCodigoBarras('00111');


var_dump($obj);