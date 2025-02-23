export default class cl_mPrestamo {
    constructor({cliente,codigo,prestamo,meses}){
        this.cliente = cliente;
        this.codigo = codigo;
        this.prestamo = prestamo;
        this.meses = meses;
    }
    set cliente(c){
        this._cliente = c;
    }
    get cliente(){
        return this._cliente;
    }
    set codigo(c){
        this._codigo = c;
    }
    get codigo(){
        return this._codigo;
    }
    set prestamo(p){
        this._prestamo = +p;
    }
    get prestamo(){
        return this._prestamo;
    }
    set meses(m){
        this._meses = +m;
    }
    get meses(){
        return this._meses;
    }
}