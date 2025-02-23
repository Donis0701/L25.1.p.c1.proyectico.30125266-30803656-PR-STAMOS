import cl_mPrestamo from "./cl_mPrestamo.js";
import cl_vPrestamo from "./cl_vPrestamo.js";
export default class cl_vOficina{
    constructor(){
        this.controlador = null;
        this.salida = document.getElementById("mainForm_salida");
        this.vPrestamo = new cl_vPrestamo();
        this.vPrestamo.btProcesar.onclick = () => this.controlador.procesarPrestamo();
    }
    procesarPrestamo() {
        this.mPrestamo = new cl_mPrestamo({
            cliente: this.vPrestamo.cliente,
            codigo: this.vPrestamo.codigo,
            prestamo: this.vPrestamo.prestamo,
            meses: this.vPrestamo.meses});
            return this.mPrestamo;
    }
    reportarPrestamo(montoFinal,prestamosM2meses,clienteMenor) {
        this.salida.innerHTML += `Monto final disponible: ${montoFinal}
        \nCantidad de clientes que pideron por 2 meses: ${prestamosM2meses}
        \nCliente que pidió el préstamo menor: ${clienteMenor}`
    }

}