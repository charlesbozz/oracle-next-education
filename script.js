/* Regras Codificador:
"e" é convertido para "enter"  - "i" é convertido para "imes"
"a" é convertido para "ai" - "o" é convertido para "ober"
"u" é convertido para "ufat" - Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e" - "imes" é convertido para "i"
"ai" é convertido para "a" - "ober" é convertido para "o"
"ufat" é convertido para "u" - Apenas letras minúsculas
Não permite acentuação
*/


let entradaTexto = document.getElementById('input-texto'); /* acessa o campo onde o usuário escreve o texto */
let btnCripto = document.querySelector('#btn-cripto'); /* acessa o botão de criptografar */
let saidaTexto = document.querySelector('#msg'); /* acessa o campo aonde vai aparecer o resultado da criptografia */
let textoCriptografado = saidaTexto.value; /* Joga para dentro da variável (textoCriptografado) o resultado da criptografia. */
let btnCopiar = document.querySelector('#btn-copy'); /* Acessa o botão de copiar texto. */

/* Abaixo, o usuário inseriu o texto e clicou no botão criptografar. Para fazer
   o botão funcionar, adicionei um evento de escuta (addEventListener), o evento
   é o click. Este click, aciona uma função que tem um evento como
   parametro (event) - este evento faz com que o botão funcione e siga
   executando a função. Esta, por sua vez, testa se a entrada de texto é
  diferente de vazia, se for, ele faz a codificação e joga o texto Codificado
  (novoTexto) para dentro da saidaTexto que é o campo resultado. */

btnCripto.addEventListener('click', function(event){
  event.preventDefault();
  if (entradaTexto.value != ""){
    let novoTexto = entradaTexto.value.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    saidaTexto.value = novoTexto;
    entradaTexto.value="";
  } else {
    entradaTexto.value = "DIGITE AQUI!";

    }
});

// BOTÃO COPIAR:
btnCopiar.addEventListener('click', function(){
  saidaTexto.select();
  document.execCommand('copy');
  saidaTexto.value="";
});
