/**
 * Created by bernardo on 04-11-2014.
 */

angular.module('kmeans')

.service('RenderService', function() {

        /*
            Renderiza pontos na tela
                * precisa de um canvas
                * pegar o id do canvas
                * mandar desenhar  1x1 no canvas
                * mover os pontos
                    ** N pontos ficam parados
                    ** K pontos se deslocam
                * escolher cor para os pontos estaticos e os pontos dinamicos
         */

        this.renderiza = function(listaPontos, canvas) {
            var ctx = canvas.getContext("2d");
            var i;

            for(i = 0; i < listaPontos.length; i++) {

                if(listaPontos[i].tipo == global.ponto.tipo.estatico) {
                    ctx.fillStyle = "orange";
                    ctx.fillRect(listaPontos[i].posicao.x, listaPontos[i].posicao.y, 5, 5);
                }
                else {
                    ctx.fillStyle = "blue";
                    ctx.fillRect(listaPontos[i].posicao.x, listaPontos[i].posicao.y, 5, 5);
                }
            }
        };

    });