/**
 * Created by bernardo on 04-11-2014.
 */

/**
 *
 * @param tipo: determina se o ponto eh estatico ou dinamico
 * @param posicao: posicao do ponto na tela
 * @constructor: passa a posicao inicial e o tipo do ponto
 */

function Ponto(tipo, posicao) {
    this.tipo = tipo;
    this.posicao = posicao;

    this.movimenta = function(posDestino) {
        if(this.tipo == global.ponto.tipo.dinamico) {
            this.posicao = posDestino;
        }
    }
}