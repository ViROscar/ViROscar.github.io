angular.module('todoApp', [])
.controller('TodoController', function ($scope, $http, $sce) {
	$scope.Texto = "";
	$scope.Sufijo = "Senior";
	$scope.Verso = "";
	$scope.selected = "";
	$scope.buscar = function () {
		console.log($scope.selected.id);
		$http.jsonp($sce.trustAsResourceUrl("http://getbible.net/json?p="+$scope.selected.id+""+$scope.Texto+"&v=valera"), {
			jsonpCallbackParam: 'callback'
		})
		.then(function (data) {
			$scope.Verso = data.data;
		});
	};
	$scope.libros = [{
			id: 'Gen',
			label: 'Génesis'
		},{
			id: 'Ex',
			label: 'Éxodo'
		}, {
			id: 'Lev',
			label: 'Levítico'
		}, {
			id: 'Num',
			label: 'Números'
		}, {
			id: 'Deut',
			label: 'Deuteronomio'
		}, {
			id: 'Josh',
			label: 'Josué'
		}, {
			id: 'Judg',
			label: 'Jueces'
		}, {
			id: 'Ruth',
			label: 'Rut'
		}, {
			id: '1Sam',
			label: '1 Samuel'
		}, {
			id: '2Sam',
			label: '2 Samuel'
		}, {
			id: '1Kings',
			label: '1 Reyes'
		}, {
			id: '2Kings',
			label: '2 Reyes'
		}, {
			id: '1Chron',
			label: '1 Crónicas'
		}, {
			id: '2Chron',
			label: '2 Crónicas'
		}, {
			id: 'Ezra',
			label: 'Esdras'
		}, {
			id: 'Neh',
			label: 'Nehemías'
		}, {
			id: 'Est',
			label: 'Ester'
		}, {
			id: 'Job',
			label: 'Job'
		}, {
			id: 'Ps',
			label: 'Salmos'
		}, {
			id: 'Prov',
			label: 'Proverbios'
		}, {
			id: 'Eccles',
			label: 'Eclesiastés'
		}, {
			id: 'Song',
			label: 'Cantares'
		}, {
			id: 'Isa',
			label: 'Isaías'
		}, {
			id: 'Jer',
			label: 'Jeremías'
		}, {
			id: 'Lam',
			label: 'Lamentaciones'
		}, {
			id: 'Ezek',
			label: 'Ezequiel'
		}, {
			id: 'Dan',
			label: 'Daniel'
		}, {
			id: 'Hos',
			label: 'Oseas'
		}, {
			id: 'Joel',
			label: 'Joel'
		}, {
			id: 'Amos',
			label: 'Amós'
		}, {
			id: 'Obad',
			label: 'Abdías'
		}, {
			id: 'Jonah',
			label: 'Jonás'
		}, {
			id: 'Mic',
			label: 'Miqueas'
		}, {
			id: 'Nah',
			label: 'Nahúm'
		}, {
			id: 'Hab',
			label: 'Habacuc'
		}, {
			id: 'Zeph',
			label: 'Sofonías'
		}, {
			id: 'Hag',
			label: 'Hageo'
		}, {
			id: 'Zech',
			label: 'Zacarías'
		}, {
			id: 'Mal',
			label: 'Malaquías'
		}, {
			id: 'Matt',
			label: 'Mateo'
		}, {
			id: 'Mark',
			label: 'Marcos'
		}, {
			id: 'Luke',
			label: 'Lucas'
		}, {
			id: 'John',
			label: 'Juan'
		}, {
			id: 'Acts',
			label: 'Hechos'
		}, {
			id: 'Rom',
			label: 'Romanos'
		}, {
			id: '1Cor',
			label: '1 Corintios'
		}, {
			id: '2Cor',
			label: '2 Corintios'
		}, {
			id: 'Gal',
			label: 'Gálatas'
		}, {
			id: 'Eph',
			label: 'Efesios'
		}, {
			id: 'Phil',
			label: 'Filipenses'
		}, {
			id: 'Col',
			label: 'Colosenses'
		}, {
			id: '1Thess',
			label: '1 Tesalonicenses'
		}, {
			id: '2Thess',
			label: '2 Tesalonicenses'
		}, {
			id: '1Tim',
			label: '1 Timoteo'
		}, {
			id: '2Tim',
			label: '2 Timoteo'
		}, {
			id: 'Titus',
			label: 'Tito'
		}, {
			id: 'Philem',
			label: 'Filemón'
		}, {
			id: 'Heb',
			label: 'Hebreos'
		}, {
			id: 'James',
			label: 'Santiago'
		}, {
			id: '1Pet',
			label: '1 Pedro'
		}, {
			id: '2Pet',
			label: '2 Pedro'
		}, {
			id: '1John',
			label: '1 Juan'
		}, {
			id: '2John',
			label: '2 Juan'
		}, {
			id: '3John',
			label: '3 Juan'
		}, {
			id: 'Jude',
			label: 'Judas'
		}, {
			id: 'Rev',
			label: 'Apocalipsis'
		}
	];

	$http.jsonp($sce.trustAsResourceUrl("http://getbible.net/json?p=John1&v=valera"), {
		jsonpCallbackParam: 'callback'
	})
	.then(function (data) {
		$scope.Verso = data.data;
	});

});
