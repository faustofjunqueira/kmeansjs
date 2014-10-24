/*
 * Desenvolvido por Fausto Junqueira e Bernardo Lins
 * Sex, 24 de Out de 2014
 * Biblioteca de K-means
 */

function inicializaCentroides(K, M, MinNumber, MaxNumber) {
	var centroides = new Array(K);
	for (var i = 0; i < K; i++) {
		centroides[i] = new Array(M);
		for (var j = 0; j < M; j++) {
			centroides[i][j] = Math.random() * ((((i * K) + j) % 2 == 0) ? MinNumber : MaxNumber) ;
		};
	};
	console.log("aqui");
	console.log(centroides);
	return centroides;
}

function buscarMinMax(P) {
	var r = {
		min : P[0][0],
		max : P[0][0]
	};
	for (var i = 0; i < P.length; i++) {
		for (var j = 0; j < P[i].length; j++) {
			if (P[i][j] > r.max)
				r.max = P[i][j];
			if (P[i][j] < r.min)
				r.min = P[i][j];
		};
	};
	return r;
}

function distancia(p1, p2) {
	var somatorio = 0;
	for (var i = 0; i < p1.length; i++) {
		somatorio += (p1[i] - p2[i]) * (p1[i] - p2[i]);
	};
	return Math.sqrt(somatorio);
}

/*
 * Retorna em qual centroide esta mais perto
 */
function centroideMaisPerto(ponto, centroides) {
	var distanciaParaCentroide = distancia(ponto, centroides[0]);
	var r = 0;
	for (var i = 1; i < centroides.length; i++) {
		var outraDistancia = distancia(ponto, centroides[i]);
		if (distanciaParaCentroide > outraDistancia) {
			distanciaParaCentroide = outraDistancia;
			r = i;
		}
	};
	return r;
}

function recalculaCentroides(Centroides, Grupos, Pontos) {
	var numeroDePontosPorCentroides = new Array(Centroides.length);
	for (var i = 0; i < Centroides.length; i++) {
		numeroDePontosPorCentroides[i] = 0;
		for (var j = 0; j < Centroides[i].length; j++) {
			Centroides[i][j] = 0;
		};
	};

	for (var i = 0; i < Grupos.length; i++) {
		numeroDePontosPorCentroides[Grupos[i]]++;
	};

	for (var i = 0; i < Pontos.length; i++) {
		for (var j = 0; j < Pontos[i].length; j++) {
			Centroides[Grupos[i]][j] += Pontos[i][j];
		};
	};

	for (var i = 0; i < Centroides.length; i++) {
		for (var j = 0; j < Centroides[i].length; j++) {
			Centroides[i][j] /= numeroDePontosPorCentroides[i];
		};
	};
	return Centroides;
}

/*
 * Entrada:
 *  Pontos: Matriz NxM, onde N é o numero de pontos e M é o numero de dimensões.
 *  K : numero de grupos
 * Saida:
 *  Grupos: é o vetor que diz em qual grupo o ponto esta. a relação entre Grupo e Ponto é o índice.
 *  Centroides: é uma matriz KxM, onde o k é o numero de grupo e M é a dimenção do pontos, inclusive dos centroides.
 */
function kmeans(Pontos, K, Epocas) {

	if (Pontos == null || Pontos.length == 0) {
		// Fazer Cuspir uma Exception;
		return null;
	}

	var N = Pontos.length;
	var M = Pontos[0].length;
	var r = {
		Centroides : null,
		Grupos : new Array(N)
	};

	// Essa variavel diz se algum ponto estava em um centroide e foi para outro
	var trocou = true;
	var MinMax = buscarMinMax(Pontos);
	var epocaAtual = 0;
	r.Centroides = inicializaCentroides(K, M, MinMax.min, MinMax.max);
	
	console.log("Centroides Iniciais:");
	console.log(r.Centroides);
	
	while (true) {
		epocaAtual++;
		
		trocou = false;

		// Para todo os pontos, vejo em qual centroide ele esta
		for (var i = 0; i < Pontos.length; i++) {
			var centroideEncontrado = centroideMaisPerto(Pontos[i], r.Centroides);
			if (r.Grupos[i] != centroideEncontrado) {
				r.Grupos[i] = centroideEncontrado;
				trocou = true;
			}
		};

		if (trocou) {
			r.Centroides = recalculaCentroides(r.Centroides, r.Grupos, Pontos);
			console.log(epocaAtual.toString()+") "+JSON.stringify(r.Centroides));
		} else {
			break;
		}
		
		if(epocaAtual >= Epocas && Epocas != -1) break;
		
	};

	return r;
}
