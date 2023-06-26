// https://wa.me/+5511964386583/?text=Prezado(a)%2c+%0d%0a%0d%0aSeu+processo+*9573%2f2023*+foi+deferido+e+encontra-se+dispon%c3%advel+para+dar+ci%c3%aancia+no+setor+de+processos.%0d%0a%0d%0aDe+*Seg*+%c3%a0+*Sex*+das+*08%3a30*+%c3%a0+*16%3a30*.

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(function(error) {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  });
}


const greetingMessage = () => {
    //let h = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', hour12: false });
    let h = new Date().getHours();
    if (h <= 5) return 'Boa madrugada';
    if (h < 12) return 'Bom dia';
    if (h < 18) return 'Boa tarde';
    return 'Boa noite';
  }
  
  console.log();
const btnDef = document.querySelector("#deferido");
const btnIndf = document.querySelector("#indeferido");

btnDef.addEventListener("click",()=>{
    let tel = document.querySelector("#celular").value;
    let proc = document.querySelector("#processo").value;
    window.open("https://wa.me/+55"+tel+"/?text=Prezado(a), "+greetingMessage()+"%2c+%0d%0a%0d%0aSeu+processo+*"+proc+"*+foi+deferido+e+encontra-se+dispon%c3%advel+para+dar+ci%c3%aancia+no+setor+de+processos.%0d%0a%0d%0aDe+*Seg*+%c3%a0+*Sex*+das+*08%3a30*+%c3%a0+*16%3a30*.%0d%0aPara informações: *4788-5413*","resposta de processo","_blank");

});

btnIndf.addEventListener("click",()=>{
  let tel = document.querySelector("#celular").value;
  let proc = document.querySelector("#processo").value;
  window.open("https://wa.me/+55"+tel+"/?text=Prezado(a), "+greetingMessage()+"%2c+%0d%0a%0d%0aSeu+processo+*"+proc+"*+foi+indeferido+e+encontra-se+dispon%c3%advel+para+dar+ci%c3%aancia+no+setor+de+processos.%0d%0a%0d%0aDe+*Seg*+%c3%a0+*Sex*+das+*08%3a30*+%c3%a0+*16%3a30*.%0d%0aPara informações: *4788-5413*","resposta de processo","_blank");

});

/*
SEG A SEX - 08:00 ÀS 20:00
SAB DOM E FERIADO 08:00 ÀS 17:00
*/
