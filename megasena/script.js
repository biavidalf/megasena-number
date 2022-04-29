for(var k = 1; k <= 60; k++){
    document.getElementById('cartela').innerHTML += ` <div>${k}<div>`
}
function gerarNumero(){
    document.getElementById('cartela').innerHTML = ''
    var numeros = ''
    var array_numeros = []

    for(var i = 0; i < 6; i++){
        var num_atual = numeroAleatorio()

        // IF ELSE para impedir numeros repetidos
        if(i == 0){
            array_numeros.push(num_atual);
        }else if(i != 0 && !array_numeros.includes(num_atual)){
            array_numeros.push(num_atual);
        }else{
            i--;
        }
    }

    for(numero in array_numeros){ numeros += array_numeros[numero] + "  " }

    var contador = 1;
    // Ordenando array pra otimizar pesquisa
    array_numeros.sort((a, b) => a-b)
    
    
    for(var numero = 0; numero < array_numeros.length + 1; numero++){
        arrayLoop:
        for(; contador <= 60; contador++){
            if(array_numeros[numero] == contador){
                document.getElementById('cartela').innerHTML += `<div class="selecionado">${array_numeros[numero]}</div>`
                contador++
                break arrayLoop
            }else{
                document.getElementById('cartela').innerHTML += ` <div>${contador}<div>`
            }
        }
    }

    document.getElementById('label_resultado').value = numeros
}

// Função para gerar um numero aleatório
function numeroAleatorio(){ 
    var valor_maximo = 61
    var valor_minimo = 1
    var num = Math.random()*(valor_maximo - valor_minimo) + valor_minimo 
    return Math.floor(num)
}

// Função pra copiar o texto do input pra área de transferência do user
function copiar(){
    copyTextToClipboard(document.getElementById('label_resultado').value)
    alert('Números copiados para sua área de transferência!')
}
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
        window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
    }

    document.body.removeChild(textArea);
}