function testar() {
    let contNaruto = 0;
    let contSasuke = 0;
    let contSakura = 0;
    let contKakashi = 0;

    // Obtém todos os inputs do tipo rádio
    let radios = document.querySelectorAll('input[type="radio"]');

    // Verifica quais opções estão marcadas
    radios.forEach(event => {
        if (event.checked) {
            if (event.value == "Naruto") {
                contNaruto++;
            } else if (event.value == "Sasuke") {
                contSasuke++;
            } else if (event.value == "Sakura") {
                contSakura++;
            } else if (event.value == "Kakashi") {
                contKakashi++;
            }
        }
    });

    // Mostra os resultados na página
    let resultado = `Naruto: ${contNaruto}<br>Sasuke: ${contSasuke}<br>Sakura: ${contSakura}<br>Kakashi: ${contKakashi}<br>`;
    document.getElementById("resultado").innerHTML = resultado;

    // Salva os resultados no localStorage (opcional)
    localStorage.setItem('Naruto', contNaruto);
    localStorage.setItem('Sasuke', contSasuke);
    localStorage.setItem('Sakura', contSakura);
    localStorage.setItem('Kakashi', contKakashi);

    // Determina o maior valor e a página correspondente
    let maior = 0;
    let pagina = '';

    if (contNaruto > maior) {
        pagina = 'Naruto';
        maior = contNaruto;
    }

    if (contSasuke > maior) {
        pagina = 'Sasuke';
        maior = contSasuke;
    }

    if (contSakura > maior) {
        pagina = 'Sakura';
        maior = contSakura;
    }

    if (contKakashi > maior) {
        pagina = 'Kakashi';
        maior = contKakashi;
    }

    // Abre a nova página após 5 segundos, se uma página foi determinada
    if (pagina) {
        setTimeout(() => {
            window.location.href = `${pagina}.html`;
        }, 1000);
    } else {
        alert("Por favor, selecione ao menos uma resposta em cada pergunta!");
    }
}    