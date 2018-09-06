/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
var listaMaterias = [{id: 1, nombre: 'software II', creditos: '4', profesor: {id: 1, nombre: 'Daniela', apellido: 'Torres', documento: "65488"}, horario: [{id: 1, diaSemana: 'Lunes', horaInicio: '08:00', horaFin: '10:00'}, {id: 2, diaSemana: 'Martes', horaInicio: '08:00', horaFin: '10:00'}], carrera: {id: 1, nombre: 'Ingenieria de Sistemas', facultad: {id: 1, nombre: 'Ingenieria'}}},
    {id: 2, nombre: 'software III', creditos: '4', profesor: {id: 2, nombre: 'Pedro', apellido: 'Aguirre', documento: '1234567987'}, horario: [{id: 2, diaSemana: 'Martes', horaInicio: '08:00', horaFin: '10:00'}], carrera: {id: 1, nombre: 'Ingenieria de Sistemas', facultad: {id: 1, nombre: 'Ingenieria'}}}];

module.controller('MateriaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.lista = listaMaterias;
        $scope.profesor = listaProfesores;
        $scope.carrera = listaCarreras;
        $scope.horario = listaHorario;
        $scope.datosFormulario = {};
        $scope.panelEditar = false;
        $scope.panelVerHorario = false;
        $scope.panelEditarHorario = false;
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
        //ver hoario
        $scope.verHorario = function (data) {
            if (data.length == 2) {
                $scope.horario = [data[0], data[1]];
            } else if (data.length == 3) {
                $scope.horario = [data[0], data[1], data[2]];
            } else if (data.length == 4) {
                $scope.horario = [data[0], data[1], data[2], data[3]];
            } else if (data.length == 5) {
                $scope.horario = [data[0], data[1], data[2], data[3], data[4]];
            } else {
                $scope.horario = [data[0]];
            }
            $scope.panelVerHorario = true;
//            document.write(data.length);
//            console.log(data.length);
            $scope.errores = {};
        };

        $scope.guardarHorario = function () {
            $scope.errores = {};
            var error = false;
            if (error)
                return;
            if (!$scope.datosFormulario.id) {
                $scope.datosFormulario.id = $scope.id++;
                $scope.lista.horario.push($scope.datosFormulario);
            }
            $scope.panelEditarHorario = false;
        };

        //editar
        $scope.editar = function (data) {
            $scope.panelEditar = true;
            $scope.datosFormulario = data;
        };
        //editar horario
        $scope.editarHotario = function (data) {
            console.log(data);
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

        $scope.eliminarHorario = function (data) {
            if (confirm('\xbfDesea elminar este registro?')) {
                for (var i = 0; i < $scope.lista.length; i++) {
                    for (var j = 0; j < $scope.lista[i].horario.length; j++) {
                        if ($scope.lista[i].horario[j] == data) {
                            $scope.lista[i].horario.splice(j, 1);
                            break;
                        }
                    }
                }
                $scope.verHorario(data);
            }
        };
        
    }]);
