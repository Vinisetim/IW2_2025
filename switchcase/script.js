//script das pergunta lá de policia da forma mais legal aí 

const perguntas = ["telefonou para a vítima?", "esteve no local do crime?", "mora perto da vítima?", "devia para a vítima?", "já trabalhou com a vítima?", "Foi visto nas proximidades do crime?", "tem algum historico de destendimento com a vítima?", "Estava ausente no momento do crime?", "tem alguma ligação com o local da ocorrência?", "foi mencionado por testemunhas?"];

const respostas = ["não", "não", "não", "não", "não", "não", "não", "não", "não", "não"];   

let respostasSim = 0;
let respostaNao = 0;

// loop para acrescentar valor as variaveis utilizando o switch case + estrutura de repetição

for (let i = 0; i < respostas.length; i++) {
    const resposta = respostas [i];

    switch (resposta) { 
        case "sim":
            respostasSim++;
            break;
        case "não":
            respostaNao++;
            break;  
            default:
            console.log('Resposta inválida na pergunta ${i + 1}');
    }
}

// Condições para determinar o grau de envolvimento do suspeito
    let resultado = "";
        switch (true) {
            case (respostasSim === 5):
                resultado = "Suspeito";
                break;
            case (respostasSim >= 6 && respostasSim <= 8):
                resultado = "Cúmplice";
                break;
            case (respostasSim >= 9):
                resultado = "Culpado";
                break;
            default:
                resultado = "Inocente";
        }

        // mostrar o resultado pá nois 

        console.log("quantidade de respostas 'sim'", respostasSim);
        console.log("Classificação:", resultado);
        
        