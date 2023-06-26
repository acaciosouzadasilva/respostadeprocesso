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

//inicio do script para instalar o app no pc/smartphone

// Verifica se o navegador suporta a instalação de PWAs
if ('serviceWorker' in navigator && 'Notification' in window && 'appInstallPrompt' in window) {
  // Escuta o evento "beforeinstallprompt" para exibir a mensagem de instalação
  window.addEventListener('beforeinstallprompt', function(event) {
    event.preventDefault(); // Evita que a mensagem de instalação padrão seja exibida pelo navegador
    window.appInstallPrompt = event; // Armazena o evento em uma variável global para uso posterior

    // Exibe a mensagem de instalação personalizada, pode ser um banner, botão ou outra forma de prompt
    const installButton = document.getElementById('install-button');

    installButton.style.display = 'block'; // Exibe o botão ou banner de instalação

    installButton.addEventListener('click', function() {
      installButton.style.display = 'none'; // Esconde o botão ou banner de instalação
      // Solicita a instalação do PWA
      window.appInstallPrompt.prompt();
      // Escuta o resultado da solicitação
      window.appInstallPrompt.userChoice.then(function(choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('O PWA foi instalado com sucesso.');
        } else {
          console.log('O PWA não foi instalado.');
        }
        // Limpa a variável global após a solicitação
        window.appInstallPrompt = null;
      });
    });
  });
}
//inicio do script para instalar o app no pc/smartphone

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
