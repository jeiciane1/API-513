let frases = ["Vencer é a única opção.", "Tudo que você precisa ser é você mesmo", "Acredite na sua mosca... vença a sua timidez.", "Queime aquela planilha do Excel", "Descentralizar", "A distração é inimiga da visão", "Tudo o que você faz na vida vem do medo ou do amor", "Para mim desistir é muito mais difícil do que tentar.", "Para mim, dinheiro não é minha definição de sucesso. Inspirar pessoas é uma definição de sucesso", "Almofadas de pele são difíceis de dormir", "George Bush não se importa com os negros", "Você já pensou que estava apaixonado por alguém, mas depois percebeu que estava apenas olhando no espelho por 20 minutos?", "Eu me importo. Eu me importo com tudo. Às vezes, não dar a mínima é o que mais me importa.", "Sinto-me calmo mas com energia", "Sinto que estou muito ocupado escrevendo história para lê-la.", "Desisto de beber toda semana", "Deixo meus emojis na cor Bart Simpson"]; 

function gerarFrase(){
    let frase = frases[
      Math.floor(Math.random() *       
      frases.length)
    ]
document.querySelector('#frase-gerada').textContent=frase;
}