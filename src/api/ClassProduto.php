<?php

include("ClassConexao.php");

class ClassProduto extends ClassConexao{
 
  public function exibeProduto()
  {
    $BFetch=$this->conectaDB()->prepare("select * from produtos");
    $BFetch->execute();

    $J=[];
    $I=0;

    while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
      $J[$I]=[

        "id_produto"=>$Fetch['id_produto'],
        
        "categoria"=>$Fetch['categoria'],
        "descricao"=>$Fetch['descricao'],
        "preco"=>$Fetch['preco'],
        "preco_final"=>$Fetch['preco_final'],
        "imagem"=>$Fetch['imagem']
        

      ];
      $I++;
            
    }
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    echo json_encode($J);
  }
}

?>