var naval = [[],[],[],[],[],[],[],[],[],[],];
var linha, coluna;

for (var i = 0; i < 10; i++){
  for (var j = 0; j < 10; j++){
    naval[i][j] = "AGUA";
  }
}

for (var pos = 1; pos < 11; pos++){
  linha = Math.floor (Math.random()*10);
  coluna = Math.floor (Math.random()*10);

  naval[linha][coluna] = "NAVIO";
}

do {
  linha = prompt ("Insira a linha: ");
  coluna = prompt ("Insira a coluna: ");

    if (naval[linha][coluna] == "NAVIO"){
      alert ("Parabéns! Você acertou. ");
    }else{
      alert("Tiro n'água");
  }

  var resp = prompt ("Você deseja continuar? s ou n");

    console.clear();
  
} while (resp == 's');
  alert("Obrigado! Volte sempre. ");