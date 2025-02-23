export default class cl_controlador {
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPrestamo() {
        this.modelo.procesarPrestamo(this.vista.procesarPrestamo());
        this.vista.reportarPrestamo(
            this.modelo.montoFinal(),
            this.modelo.prestamosM2meses(),
            this.modelo.clienteMenor
        );
    }
}