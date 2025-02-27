/*Se desea llevar un control de los préstamos que realiza una oficina. Se tiene por cada prestamo:
nombre del cliente, código del préstamo,monto y cantidad de meses. Se requiere de un programa que permita
el registro de esta información,conociendo al principio de la ejecución el monto disponible para préstamos
y el porcentaje de comisión mensual que se cobrará.

Primeros requerimientos:
Monto final disponible
Cantidad de clientes que pideron por 2 meses
Cliente que pidió el préstamo menor*/
import cl_vOficina from "./cl_vOficina.js";
import cl_mOficina from "./cl_mOficina.js";
import cl_controlador from "./cl_controlador.js";

export default class cl_principal {
    constructor(){
        let montoCaja = prompt("Ingrese el monto inicial: ");
        let porcComisionMensual = prompt("Ingrese el porcentaje de comisión mensual: ");
        let vista = new cl_vOficina();
        let modelo = new cl_mOficina(montoCaja,porcComisionMensual);
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;
    }
}