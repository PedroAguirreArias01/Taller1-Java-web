'use strict';

var listaEstudiantes =
        [{id: 1, nombre: 'Daniela', apellido: 'Torres', codigo: '201511109', documento: '1234567987', fechaNacimiento: '20/12/97', municipio: {id: 4, nombre: 'Umbita'}, carrera: {nombre: 'Ingenieria de Sistemas', facultad: {id: 1, nombre: 'Ingenieria'}}},
            {id: 2, nombre: 'Pedro', apellido: 'Aguirre', codigo: '201320143', documento: '1234567987', fechaNacimiento: '23/12/95', municipio: {id: 5, nombre: 'Ramiriqui'}, carrera: {nombre: 'Ingenieria de Sistemas', facultad: {id: 1, nombre: 'Ingenieria'}}}];

module.controller('EstudianteCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.lista = listaEstudiantes;
        $scope.id = 2;
        $scope.municipio = listaMunicipios;
        $scope.carrera = listaCarreras;
        $scope.datosFormulario = {};
        $scope.panelEditar = false;

        //guardar
        $scope.nuevo = function () {
            $scope.panelEditar = true;
            $scope.datosFormulario = {};
        };

        $scope.guardar = function () {
            $scope.errores = {};
            var error = false;
            if (error)
                return;
            if (!$scope.datosFormulario.id) {
                $scope.datosFormulario.id = $scope.id++;
                $scope.lista.push($scope.datosFormulario);
            }
            $scope.panelEditar = false;
        };
        $scope.cancelar = function () {
            $scope.panelEditar = false;
            $scope.datosFormulario = {};
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditar = true;
            $scope.datosFormulario = data;
        };
        //eliminar
        $scope.eliminar = function (data) {
            if (confirm('\xbfDesea elminar este registro?')) {
                for (var i = 0; i < $scope.lista.length; i++) {
                    if ($scope.lista[i] == data) {
                        $scope.lista.splice(i, 1);
                        break;
                    }
                }
            }
        };
    }]);
