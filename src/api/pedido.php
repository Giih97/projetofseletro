<?php

header("Access-Control-Allow-Origin:*");

require_once "./conexao.php";

if($_SERVER['REQUEST_METHOD'] === 'GET'){

    $sql = "SELECT * FROM pedidos;";
    $resultado = query($sql);
    $pedidos = [];

    while($row = mysqli_fetch_assoc($resultado)){
        $pedidos[] = $row;
    }

    echo json_encode($pedidos); 

} else if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $nome = $_POST['nome'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $produto = $_POST['produto'];
    $valor = floatval($_POST['valor']);
    $quantidade = intval($_POST['quantidade']);
    $valor_final = $valor * $quantidade;

    $sql = "INSERT INTO pedidos (nome_cliente, endereco, telefone, nome_produto, valor_unit, quantidade, valor_final)  
    VALUES ('$nome', '$endereco' ,'$telefone', '$produto', $valor, $quantidade, $valor_final);";
    nonquery($sql);
}



?>