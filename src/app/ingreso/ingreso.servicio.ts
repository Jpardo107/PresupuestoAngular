import { Ingreso } from "./ingreso.model";

export class IngresoServicio
{
    ingresos: Ingreso[] = [
    new Ingreso('Salario', 1000),
    new Ingreso('Venta coche', 2000)]

    elminar(ingreso:Ingreso)
    {
        const indice:number = this.ingresos.indexOf(ingreso)
        this.ingresos.splice(indice,1)
    }

}