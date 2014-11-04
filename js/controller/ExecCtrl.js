angular.module('kmeans')

.controller('ExecCtrl',['$scope','CSVService',function($scope,CSVService){
	
	$scope.formInput = {epocas:0, k : 0};
	var Pontos;

	$scope.mostraConteudo = function($fileContent){
    	$scope.ConteudoCSV = $fileContent;
    	console.log($scope.ConteudoCSV);
	};
	
	$scope.executar = function(){
		Pontos = CSVService.textoParaMatriz($scope.ConteudoCSV);
	};

}]);
