//Exemplo de pergunta: "Me recomende algum anime"
const animesRecomendados = {
    probablyWords: ["recomendar", "sugerir", "indicar", "animes", "séries", "assistir", "começar", "por", "qual", "você", "me", "sugere", "recomenda"],
    matched: 0,
}

//Exemplo de pergunta: "Qual o melhor anime?"
const maisAvaliado = {
    probablyWords: ["anime", "melhor", "mais", "bem", "avaliado", "avaliação", "classificação", "top", "ranking", "maior", "nota", "mal", "myanimelist"],
    matched: 0,
}

//Exemplo de pergunta: "Qual o seu anime preferido?"
const animePreferido = {
    probablyWords: ["anime", "favorito", "preferido", "amado", "seu", "mais", "gostou", "gosta"],
    matched: 0,
}

//Exemplo de pergunta: "Onde posso ver animes?"
const verAnimes = {
    probablyWords: ["assistir", "ver", "streaming", "plataforma", "serviço", "animes", "onde", "lugar", "site", "aplicativo", "posso"],
    matched: 0,
}

//Caso haja perguntas fora do tema
const papoFurado = {
    probablyWords: ["oi", "tudo", "bem", "quem", "é", "você", "vc", "piada", "idade", "sua", "onde", "mora", "gosta", "de", "que", "futebol", "política", "receitas", "notícias", "negócios", "tecnologia", "história", "ciência", "saúde"],
    matched: 0,
}

export const todosBancos = [animesRecomendados, maisAvaliado, animePreferido, verAnimes, papoFurado]

//Respostas
function showAnswer(index) {
    switch (index) {
        case 0:
            return console.log("Para iniciantes recomendo Dragon Ball ou Naruto, para pessoas que já assitem recomendo Shigatsu wa kimi no uso.")
        case 1:
            return console.log("Atualmente o anime que tem a melhor avaliação segundo o MyAnimeList é Sousou no Frieren.")
        case 2:
            return console.log("Meu anime preferido é Code Geass!")
        case 3:
            return console.log("Os meios oficiais de se ver anime podem ser, canais de tv (animeTv) ou streamings, como HBO Max, Netflix, Amazon Prime e Crunchyroll.")
        default:
            return console.log("Infelizmente não posso ajudá-lo com este assunto. Mas se quiser uma recomendação de anime posso ser útil.")
    }
}

//Deduzir resposta
export function mostProbablyQuestion() {
    let matches = [
        animesRecomendados.matched, 
        maisAvaliado.matched, 
        animePreferido.matched,
        verAnimes.matched, 
        papoFurado.matched
    ]

    return showAnswer(matches.indexOf(Math.max(...matches)))
}
