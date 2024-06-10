//pegar o elemento html da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//identificar o clique na seta avançar
btnAvancar.addEventListener("click", function () {
  //console.log(cartaoAtual);
  // console.log(cartoes.length - 1);
  // console.log(cartaoAtual === cartoes.length - 1 );

  //se não for identico ao tamanho da constante cartoes, retorna
  if (cartaoAtual === cartoes.length - 1) return;
  console.log(cartoes.length);

  //buscar o cartao selecionado e "remover a seleção" dos outros cartões
  esconderCartaoSelecionado();

  //fazer o próximo cartão aparecer, buscando pela classe

  cartaoAtual++;
  cartoes[cartaoAtual].classList.add("selecionado");//aqui o código pode ser refaturado tbm, com a function mostrarCartao()
  
});

//Botão Voltar
btnVoltar.addEventListener("click", function () {
    
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();
    
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado"); //aqui o código pode ser refaturado tbm, com a function mostrarCartao()
  });

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
