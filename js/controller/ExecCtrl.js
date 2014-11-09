angular.module('kmeans')


.controller('ExecCtrl',['$scope', 'RenderService', 'CSVService', function($scope, RenderService ,CSVService){
        /**
         * Cria uma lista de pontos a serem renderizados
         * @param posicoes: matriz com as posiçes x e y de todos os pontos a serem renderizados
         * @returns {Array}: a lista de pontos a serem renderizados
         */

        $scope.formInput = {epocas:0, k : 0};
        var Pontos;

        $scope.mostraConteudo = function($fileContent){
            $scope.ConteudoCSV = $fileContent;
        };

        // caputura o canvas onde serao renderizados os pontos
        var canvas = document.getElementById(global.html.canvas.canvasPontos);
        RenderService.setCanvas(canvas);



        var inicializaKmeans = function(c){
            RenderService.renderizaMatriz(Pontos,"orange");
            RenderService.renderizaMatriz(c,"blue");
        };

        var executandoKmeans = function(c){
            RenderService.limpa();
            RenderService.renderizaMatriz(Pontos,"orange");
            RenderService.renderizaMatriz(c,"blue");
        };

        var finalKmeans = function(c,g){
            $scope.pontos = Pontos;
            $scope.grupos = g;
            $scope.centroides = c;
        };

        $scope.executar = function(){
            try{
                Pontos = CSVService.textoParaMatriz($scope.ConteudoCSV);
                kmeans(Pontos,$scope.formInput.k,$scope.formInput.epocas,inicializaKmeans,executandoKmeans,finalKmeans);
            }catch (e){
                alert(e);
            }
        };

}]);
