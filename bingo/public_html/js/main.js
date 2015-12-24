var $divNumerosSorteados,
    $divsNumeros,    
    $ordemSorteio,
    listenerNumerosSorteados = {},
    listenerOrdemSorteio = {},
    listenerExibir = {},
    bingo,
    $botaoSortear,
    $numeroSorteado;

listenerNumerosSorteados.onNumeroSorteado = function(numero, bingo) {
    $('.ultimoSorteado').removeClass('ultimoSorteado');
    $($divsNumeros[numero-1]).addClass('sorteado').addClass('ultimoSorteado');
};

listenerNumerosSorteados.onReiniciado = function(bingo) {
    $divNumerosSorteados = $('#numerosSorteados');
    $divsNumeros = [];
    $divNumerosSorteados.html('');
    for (var i = 0; i < 75; i++) {
        $div = $('<div class="numero">' + (i+1) + '</div>');
        $divsNumeros.push($div);
        $divNumerosSorteados.append($div);
    }
};

listenerOrdemSorteio.onNumeroSorteado = function(numero, bingo) {
    $ordemSorteio.append($('<span class="ordemSorteio">' + numero + '</span>'));
};

listenerOrdemSorteio.onReiniciado = function(bingo) {
    $ordemSorteio = $('#ordemSorteio');
    $ordemSorteio.html('');
};

listenerExibir.onNumeroSorteado = function(numero, bingo) {
    var el = $numeroSorteado.clone();
    
    el.text('' + numero);
    $numeroSorteado.after(el);
    el.addClass('animar');
};

listenerExibir.onReiniciado = function(numero, bingo) {
    $numeroSorteado = $($('.numeroSorteado')[0]);
}

$(document).ready(function(){
    bingo = new Bingo();
    bingo.addListener(listenerNumerosSorteados);
    bingo.addListener(listenerOrdemSorteio);
    bingo.addListener(listenerExibir);
    bingo.reiniciar();
    $botaoSortear = $('#sortear');
    $botaoSortear.click(function() {
       bingo.sortear(); 
    });
});