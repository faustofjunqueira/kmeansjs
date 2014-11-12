angular.module('kmeans')


.controller('ExecCtrl',['$scope', 'RenderService', 'CSVService', function($scope, RenderService ,CSVService){
        /**
         * Cria uma lista de pontos a serem renderizados
         * @param posicoes: matriz com as posiçes x e y de todos os pontos a serem renderizados
         * @returns {Array}: a lista de pontos a serem renderizados
         */

        $scope.escondePontos = true;
        $scope.escondeResultado = true;

        var alertaAguarde = { type: 'danger', msg: 'Por favor, aguarde enquanto o algoritmo esta executando...' };
        var alertaTerminou = { type: 'success', msg: 'O algoritmo do kmeans terminou sua execuçao!' };

        $scope.alertas = [];

        $scope.formInput = {epocas:0, k : 0};
        var Pontos;

        $scope.mostraConteudo = function($fileContent){
            $scope.ConteudoCSV = $fileContent;
        };

        var canvas = document.getElementById("div-canvas").children[0];
        RenderService.setCanvas(canvas);



        var inicializaKmeans = function(c){
            RenderService.limpa();
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
            $scope.escondeResultado = false;
        };

        $scope.executar = function() {
            $scope.escondePontos = false;
            try{
                Pontos = CSVService.textoParaMatriz($scope.ConteudoCSV);
                kmeans($scope, Pontos,$scope.formInput.k,$scope.formInput.epocas,inicializaKmeans,executandoKmeans,finalKmeans);
            }catch (e){
                alert(e);
            }
        };
}]);
