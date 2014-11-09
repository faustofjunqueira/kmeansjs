/**
 * Created by bernardo on 04-11-2014.
 */

angular.module('kmeans')

.service('RenderService', function() {

        this.setCanvas = function(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
        };

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

        this.renderiza = function(listaPontos) {
            var i;
            for(i = 0; i < listaPontos.length; i++) {

                if(listaPontos[i].tipo == global.ponto.tipo.estatico) {
                    this.ctx.fillStyle = "orange";
                    this.ctx.fillRect(listaPontos[i].posicao.x, listaPontos[i].posicao.y, 5, 5);
                }
                else {
                    this.ctx.fillStyle = "blue";
                    this.ctx.fillRect(listaPontos[i].posicao.x, listaPontos[i].posicao.y, 5, 5);
                }
            }
        };

        this.renderizaMatriz = function(matriz,cor) {
            var i;
            for(i = 0; i < matriz.length; i++) {
                this.ctx.fillStyle = cor;
                this.ctx.fillRect(matriz[i][0], matriz[i][1], 5, 5);
            }
        };

        this.limpa = function(){
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        };

        /*
        var criaListaPontos = function(matriz) {
         var i;
         var listaPontos = [];
         for(i = 0; i < matriz.length; i++) {
         var posicaoAtual = {
         x: matriz[i][0],
         y: matriz[i][1]
         };
         var pontoNovo = new Ponto(global.ponto.tipo.estatico, posicaoAtual);

         listaPontos.push(pontoNovo);
         }


         return listaPontos;
         };*/

    });