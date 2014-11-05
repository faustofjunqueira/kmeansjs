angular.module('kmeans')

.controller('ExecCtrl',['$scope', 'RenderService', function($scope, RenderService){
        /**
         * Cria uma lista de pontos a serem renderizados
         * @param posicoes: matriz com as posiçes x e y de todos os pontos a serem renderizados
         * @returns {Array}: a lista de pontos a serem renderizados
         */
        this.criaListaPontos = function(matriz, listaClusters) {
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

            for(i = 0; i < listaClusters.length; i++) {
                var posicaoAtual = {
                    x: listaClusters[i][0],
                    y: listaClusters[i][1]
                };

                var clusterNovo = new Ponto(global.ponto.tipo.dinamico, posicaoAtual);

                listaPontos.push(clusterNovo);
            }

            return listaPontos;
        };

        // caputura o canvas onde serao renderizados os pontos
        var canvas = document.getElementById(global.html.canvas.canvasPontos);


        var matriz = [[0, 1], [8, 15], [81, 125], [111, 115], [32, 27], [18, 65], [81, 12]];
        var listaCluster = [[100, 101], [141, 17], [8, 99]];

        var pontos = this.criaListaPontos(matriz, listaCluster);

        //renderiza os pontos
        RenderService.renderiza(pontos, canvas);
}]);
