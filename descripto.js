// Variáveis:
let btnDescripto = document.getElementById("btnDescripto"); //Acesso ao botão descriptografar.
let codigos = ["ai","enter","imes","ober","ufat"]; // Array com os códigos de criptografia.


// Função que habilita o botão à descriptografar a mensagem:

btnDescripto.addEventListener('click',function(event){
event.preventDefault()
analiseCriptografia();
entradaTexto.value="";
});


// Verificando se a String foi criptografada:

function analiseCriptografia(){
  // O código abaixo verifica se os códigos de criptografia se encontram na palavra digitada.
  let verifica = codigos.some(codigos => entradaTexto.value.includes(codigos));
  if (verifica==true) {
    descriptografar();
  } else {
    alert("ATENÇÃO! O texto não está criptografado!");
  }
};

// Função que descriptografa a mensagem:
function descriptografar() {
  let textoDescripto = entradaTexto.value.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");
  saidaTexto.value=textoDescripto;

};
