function helloWorld(){
    console.log("Hello World");
}
helloWorld();

// TODO: nova task
const saudacao = () => {
    //FIXME: resolver isso aqui
    var data = new Date();
    return data.getHours() <= 12? "bom dia": data.getHours <= 18? "boa tarde": "boa noite";
}
console.log('A saudação do momento é ' + saudacao() + '.');