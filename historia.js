/*Neste dia especial, quero celebrar o dia mais feliz da minha vida: nosso casamento em <strong> 28 de julho de 2018 </strong>. Uma história que teve início em 2016. de uma linda jornada que só cresce a cada dia.  
Você é minha melhor amiga, minha companheira, meu porto seguro.  
Este site é só uma pequena homenagem ao imenso amor que sinto por você.*/
const anoAtual = new Date().getFullYear();

const mensagens = [
  "Eu conheci e passei a gostar de você neste dia, sua voz era doce e agradável, você era muito interessante, me senti a vontade com você.",
  "Passei a ficar ansioso por sair com você com mais frequência.",
  "Te convidar para o Baile do Material Bélico foi a minha forma de te dizer que eu queria você comigo. Será que você aceitaria?!",
  "A sua companhia ao meu lado neste dia marcante foi a combinação perfeita.",
  "Comemorar uma conquista com a tua ausência me mostrou o vazio que sua falta causava em mim.",
  "Morar sozinho, longe de você, só deixava mais claro pra mim: eu preciso de você!",
  "Te ver e não te sentir perto de mim era torturante.",
  "Então, com o tempo, algo foi ficando mais evidente: é você que eu quero para sempre!",
  "A decisão de selar nossa eterna união com o casamento não foi fácil, mas algo sempre me dizia que era a decisão certa a um passo da felicidade eterna.",
  "Nosso dia chegou, como você estava linda! 😍",
  `Hoje, ${anoAtual}, comemoramos com muita alegria nossos ${anoAtual-2018} anos casados com uma linda família.`,
  ""
];

const imagens = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.png",
  "8.jpg",
  "9.JPG",
  "10.JPG",
  "11.JPG",
  "12.png",
];

let indice = 0;
let tocouMusica = false;

function mostrarProximaMensagem() {
  const caixa = document.getElementById("mensagem");
  const progresso = document.getElementById("progresso");
  const img = document.querySelector(".foto");
  const audio = document.getElementById("musica");

  if (!tocouMusica) {
    iniciarFadeIn(audio);
    tocouMusica = true;
  }

  if (indice < mensagens.length) {
    img.src = imagens[indice];
    caixa.textContent = mensagens[indice];
    progresso.innerHTML = gerarCoracoes(indice + 1, mensagens.length);
    indice++;
  } else {
    img.src = "gabrielaedson1.JPG"
    caixa.textContent = "Clique para reviver nossa história ❤️";
    progresso.innerHTML = gerarCoracoes(0, mensagens.length);
    iniciarFadeOut(audio);
    indice = 0;
    tocouMusica = false;
  }
}

function gerarCoracoes(cheios, total) {
  let coracoes = "";
  for (let i = 0; i < total; i++) {
    coracoes += i < cheios ? "❤️" : "🤍";
  }
  return coracoes;
}

function iniciarFadeIn(audioElement) {
  audioElement.volume = 0;
  audioElement.play();
  let volume = 0;
  const fadeIn = setInterval(() => {
    if (volume < 1) {
      volume += 0.05;
      audioElement.volume = Math.min(volume, 1);
    } else {
      clearInterval(fadeIn);
    }
  }, 200); // leva cerca de 4s para atingir volume 1
}

function iniciarFadeOut(audioElement) {
  let volume = audioElement.volume;
  const fadeOut = setInterval(() => {
    if (volume > 0) {
      volume -= 0.05;
      audioElement.volume = Math.max(volume, 0);
    } else {
      clearInterval(fadeOut);
      audioElement.pause();
      audioElement.currentTime = 0; // reinicia para a próxima vez
    }
  }, 200); // leva cerca de 4s para desaparecer
}