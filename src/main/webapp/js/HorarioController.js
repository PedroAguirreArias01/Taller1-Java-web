/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
var listaHorario = [{id: 1, diaSemana: 'Lunes', horaInicio: '08:00', horaFin: '10:00'}, {id: 2, diaSemana: 'Martes', horaInicio: '08:00', horaFin: '10:00'}];

module.controller('HorarioCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.lista = listaHorario;

        $scope.datosFormulario = {};
        $scope.panelEditarHorario = false;

        //guardar
        $scope.nuevo = function () {
            $scope.panelEditarHorario = true;
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
            $scope.panelEditarHorario = false;
        };
        $scope.cancelar = function () {
            $scope.panelEditarHorario = false;
            $scope.datosFormulario = {};
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditarHorario = true;
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


