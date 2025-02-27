export default class cl_vPrestamo {
    constructor(){
        this.inCliente = document.getElementById("prestamoForm_inCliente");
        this.inCodigo = document.getElementById("prestamoForm_inCodigo");
        this.inPrestamo = document.getElementById("prestamoForm_inPrestamo");
        this.inMeses = document.getElementById("prestamoForm_inMeses");
        this.btProcesar = document.getElementById("prestamoForm_btProcesar");
    }
    get cliente(){
        return this.inCliente.value;
    }
    get codigo(){
        return this.inCodigo.value;
    }
    get prestamo(){
        return +this.inPrestamo.value;
    }
    get meses(){
        return +this.inMeses.value;
    }
}