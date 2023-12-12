function helloWorld(){
    console.log("Hello World");
}
helloWorld();

const saudacao = () => {
    var data = new Date();
    return data.getHours() <= 12? "bom dia": data.getHours <= 18? "boa tarde": "boa noite";
}
console.log('A saudação do momento é ' + saudacao() + '.');