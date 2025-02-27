export default class cl_mOficina{
    constructor(montoCaja,porcComisionMensual){
        this.montoCaja = montoCaja;
        this.porcComisionMensual = porcComisionMensual;
        this.cntClientes2meses = 0;
        this.clienteMenor = "";
        this.prestamosClientes = 9999999999999;
        this.acumPrestamos = 0;
    }

    procesarPrestamo(prestamo){
        this.acumPrestamos += prestamo.prestamo;
        if(prestamo.meses == 2){
            this.cntClientes2meses++;
        }
        if(prestamo.prestamo < this.prestamosClientes){
            this.prestamosClientes = prestamo.prestamo;
            this.clienteMenor = prestamo.cliente;
        }
    }
    prestamosM2meses(){
        return this.cntClientes2meses;
    }
    montoFinal(){
        return this.montoCaja - this.acumPrestamos;
    }
}