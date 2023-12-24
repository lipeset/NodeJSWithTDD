function helloWorld(){
    console.log("Hello World");
}
helloWorld();

// ABAIXO OS COMANDOS DO TODO-TREE
// BUG: CÓDIGO QUEBRADO
// HACK: CÓDIGO DIFERENTE
// FIXME: CÓDIGO DE CORREÇÃO
// XXX: RANDOM
// [ ]: ISSUE ESCOLHIDA
// [x]: ISSUE FECHADA 

const saudacao = () => {
    var data = new Date();
    return data.getHours() <= 12? "bom dia": data.getHours <= 18? "boa tarde": "boa noite";
}
console.log('A saudação do momento é ' + saudacao() + '.');