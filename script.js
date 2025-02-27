// Função para atualizar os textos
function atualizarTexto(inputId, spanId) {
  const input = document.getElementById(inputId);
  const span = document.getElementById(spanId);

  input.addEventListener("input", () => {
    span.textContent = input.value;
  });
}

// Função para atualizar os links 
function atualizarLink(inputId, linkId) {
  const input = document.getElementById(inputId);
  const link = document.getElementById(linkId);

  input.addEventListener("input", () => {
    link.href = input.value;
  });
}

// Atualiza o texto dos spans
atualizarTexto("nome", "nomeSpan");
atualizarTexto("cargo", "cargoSpan");
atualizarTexto("agencia", "agenciaSpan");
atualizarTexto("fone", "foneSpan");
atualizarTexto("email", "emailSpan");
atualizarTexto("site", "siteSpan");
atualizarTexto("end", "endSpan");

// Atualiza os links
atualizarLink("site", "siteSpan");
atualizarLink("facebook", "facebookLink");
atualizarLink("linkedin", "linkedinLink");
atualizarLink("instagram", "instagramLink");

// Atualiza o link do WhatsApp
const inputFone = document.getElementById("fone");
const linkFone = document.getElementById("foneSpan");

inputFone.addEventListener("input", () => {
  linkFone.href = "https://wa.me/" + inputFone.value.replace(/\s/g, '');
});

// Atualiza a imagem
const inputLinkImg = document.getElementById("linkimg");
const imgElement = document.getElementById("imgImg");

inputLinkImg.addEventListener("input", () => {
  imgElement.src = inputLinkImg.value;
});

        // Função para copiar o conteúdo da assinatura com formatação
        newFunction();
function newFunction() {
  document.getElementById('copyBtn').addEventListener('click', function () {
    // Selecionar o conteúdo da assinatura
    const contentBox = document.getElementById('contentBox');

    // Criar um elemento temporário para copiar o conteúdo com formatação
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.innerHTML = contentBox.innerHTML;
    document.body.appendChild(tempDiv);

    // Selecionar o conteúdo do tempDiv
    const range = document.createRange();
    range.selectNodeContents(tempDiv);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Executar o comando de cópia
    try {
      document.execCommand('copy');
      alert('Assinatura copiada para a área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar assinatura:', err);
      alert('Erro ao copiar a assinatura.');
    }

    // Limpar a seleção e remover o tempDiv
    selection.removeAllRanges();
    document.body.removeChild(tempDiv);
  });
}

