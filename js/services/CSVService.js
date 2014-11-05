angular.module('kmeans').service('CSVService',[function(){
	this.textoParaMatriz = function(texto){
		var r = texto.split('\n');
		for (var i = 0; i < r.length; i++) {
			r[i] = r[i].split(',');
		};

		return this.MatrizTextoParaMatrizNumeros(r);
	},
	this.MatrizTextoParaMatrizNumeros = function (matriz){
		var a;
		var ElementosEmUmaLinha = matriz[0].length;
		for (var i = 0; i < matriz.length; i++) {

			if (matriz[i].length != ElementosEmUmaLinha)
				throw "Numero de elementos de uma linha invalida( "+ElementosEmUmaLinha.toString()+", "+matriz[i].toString()+" )"

			for (var j = 0; j < matriz[i].length; j++) {
				a = Number(matriz[i][j]);
				if ( !isNaN(a) )
					matriz[i][j] = a;
				else
					throw 'Contem elementos inválidos na matriz';
			};
		};
		return matriz;
	}
}]);