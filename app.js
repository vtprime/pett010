console.log("Deu certo!")

// async --> assincrono
async function imagemApi(){
// espera chegar a resposta --> await
let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random')
let dadosApi = await respostaApi.json();
document.querySelector(".img-dog").src= dadosApi.message
console.log(respostaApi);
}
imagemApi()